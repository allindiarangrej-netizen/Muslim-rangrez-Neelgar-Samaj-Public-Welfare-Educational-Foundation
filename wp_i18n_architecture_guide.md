# WordPress & Elementor Trilingual Architecture Guide: Rangrez Community Bharat
This architectural guide provides the production-ready code modifications, CSS, and localized string dictionaries to mirror the React application's trilingual engine in a WordPress/Elementor environment.

---

## 1. Multilingual Routing & Language Detection (`functions.php`)
Place this block inside your WordPress theme's `functions.php` or a custom PHP plugin. It handles routing directories (`/`, `/en/`, `/ur/`), cookies, browser language auto-detection, and RTL integration.

```php
<?php
/**
 * Trilingual Architecture for Rangrez Community Bharat (rangrezcommunity.org)
 * Supports 'hi' (Default), 'en', 'ur' (RTL)
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

// 1. Detect and Set Language Preference on First Visit
add_action( 'init', 'rcb_handle_language_preference' );
function rcb_handle_language_preference() {
    if ( is_admin() || wp_doing_ajax() ) {
        return;
    }

    // Check URL Path first to define language context
    $current_path = $_SERVER['REQUEST_URI'];
    $lang = 'hi'; // Default

    if ( preg_match( '/^\/en(\/|$)/', $current_path ) ) {
        $lang = 'en';
    } elseif ( preg_match( '/^\/ur(\/|$)/', $current_path ) ) {
        $lang = 'ur';
    } elseif ( preg_match( '/^\/hi(\/|$)/', $current_path ) ) {
        $lang = 'hi';
    } else {
        // No explicit path: Check Local Storage preference (passed via cookie rcb_lang_pref)
        if ( isset( $_COOKIE['rcb_lang_pref'] ) && in_array( $_COOKIE['rcb_lang_pref'], ['hi', 'en', 'ur'] ) ) {
            $lang = $_COOKIE['rcb_lang_pref'];
            rcb_redirect_to_lang( $lang );
        } else {
            // First visit: Auto-detect browser language
            $browser_lang = substr( $_SERVER['HTTP_ACCEPT_LANGUAGE'] ?? 'hi', 0, 2 );
            $lang = in_array( $browser_lang, ['hi', 'en', 'ur'] ) ? $browser_lang : 'hi';
            
            // Set cookie for persistence and redirect
            setcookie( 'rcb_lang_pref', $lang, time() + ( 365 * DAY_IN_SECONDS ), '/' );
            rcb_redirect_to_lang( $lang );
        }
    }

    // Define language context global
    define( 'RCB_CURRENT_LANG', $lang );
}

function rcb_redirect_to_lang( $lang ) {
    $current_url = home_url( $_SERVER['REQUEST_URI'] );
    $base_path = parse_url( $current_url, PHP_URL_PATH );
    
    // Skip if already in the correct folder
    if ( $lang === 'hi' && ( $base_path === '/' || str_starts_with( $base_path, '/hi/' ) ) ) return;
    if ( $lang === 'en' && str_starts_with( $base_path, '/en/' ) ) return;
    if ( $lang === 'ur' && str_starts_with( $base_path, '/ur/' ) ) return;

    // Build target URL
    $clean_path = preg_replace( '/^\/(hi|en|ur)\/?/', '', $base_path );
    $target_prefix = $lang === 'hi' ? '/' : "/{$lang}/";
    $target_url = home_url( $target_prefix . ltrim( $clean_path, '/' ) );

    wp_safe_redirect( $target_url, 302 );
    exit;
}

// 2. Append HTML dir="rtl" and lang properties dynamically
add_filter( 'language_attributes', 'rcb_dynamic_html_attributes', 10, 2 );
function rcb_dynamic_html_attributes( $doctype, $lang_attr ) {
    $lang = defined( 'RCB_CURRENT_LANG' ) ? RCB_CURRENT_LANG : 'hi';
    
    if ( $lang === 'ur' ) {
        return 'dir="rtl" lang="ur" class="rtl-active"';
    } elseif ( $lang === 'en' ) {
        return 'dir="ltr" lang="en-US"';
    } else {
        return 'dir="ltr" lang="hi-IN"';
    }
}

// 3. Inject Alternate SEO alternate headers
add_action( 'wp_head', 'rcb_inject_seo_alternates', 1 );
function rcb_inject_seo_alternates() {
    $base_domain = 'https://rangrezcommunity.org';
    $current_path = preg_replace( '/^\/(hi|en|ur)\/?/', '', $_SERVER['REQUEST_URI'] );
    $clean_path = ltrim( $current_path, '/' );

    echo "\n<!-- Rangrez Community SEO Internationalization Links -->\n";
    echo '<link rel="canonical" href="' . esc_url( $base_domain . '/' . ( RCB_CURRENT_LANG === 'hi' ? '' : RCB_CURRENT_LANG . '/' ) . $clean_path ) . '" />' . "\n";
    echo '<link rel="alternate" hreflang="hi" href="' . esc_url( $base_domain . '/' . $clean_path ) . '" />' . "\n";
    echo '<link rel="alternate" hreflang="en" href="' . esc_url( $base_domain . '/en/' . $clean_path ) . '" />' . "\n";
    echo '<link rel="alternate" hreflang="ur" href="' . esc_url( $base_domain . '/ur/' . $clean_path ) . '" />' . "\n";
    echo '<link rel="alternate" hreflang="x-default" href="' . esc_url( $base_domain . '/' . $clean_path ) . '" />' . "\n";
}
```

---

## 2. Right-to-Left (RTL) Layout Override (CSS)
Apply these rules to your Elementor Custom CSS or theme stylesheet to flip values, implement custom Urdu typography stacks, line-height, and font scaling:

```css
/* Urdu Webfont Stack & Typography Scaling */
@import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap');

html[lang="ur"],
.rtl-active {
    font-family: 'Noto Nastaliq Urdu', 'Jameel Noori Nastaliq', 'Scheherazade New', 'Amiri', serif !important;
}

/* 15% Font Size bump and line-height scaling exclusively for Urdu */
.rtl-active p,
.rtl-active span,
.rtl-active li,
.rtl-active input,
.rtl-active textarea,
.rtl-active select,
.rtl-active button {
    font-size: 1.15em !important;
    line-height: 2.1 !important;
}

.rtl-active h1,
.rtl-active h2,
.rtl-active h3,
.rtl-active h4,
.rtl-active h5,
.rtl-active h6,
.rtl-active .elementor-heading-title {
    font-family: 'Noto Nastaliq Urdu', 'Jameel Noori Nastaliq', serif !important;
    font-size: 1.25em !important;
    line-height: 2.2 !important;
}

/* Absolute Positioning & Flexbox Inversion */
.rtl-active .elementor-row,
.rtl-active .elementor-container,
.rtl-active .flex-container {
    flex-direction: row-reverse !important;
}

.rtl-active .text-left {
    text-align: right !important;
}

.rtl-active .text-right {
    text-align: left !important;
}

/* Margin/Padding flipping */
.rtl-active .ml-auto {
    margin-right: auto !important;
    margin-left: 0 !important;
}

.rtl-active .mr-auto {
    margin-left: auto !important;
    margin-right: 0 !important;
}

.rtl-active .pl-4 {
    padding-right: 1rem !important;
    padding-left: 0 !important;
}

.rtl-active .pr-4 {
    padding-left: 1rem !important;
    padding-right: 0 !important;
}
```

---

## 3. Dynamic Switcher Widget & Client Persistence (JS Component)
This custom JavaScript class implements the language preference locking mechanism in local storage and cookies to bridge WordPress and client environments.

```javascript
/**
 * Rangrez Community Trilingual Preference Controller
 */
class RCB_Translation_Engine {
    constructor() {
        this.prefKey = 'rcb_lang_pref';
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.bindEvents();
            this.detectFirstVisit();
        });
    }

    detectFirstVisit() {
        const hasPref = localStorage.getItem(this.prefKey);
        if (!hasPref) {
            // Auto detect
            const browserLang = (navigator.language || navigator.userLanguage).toLowerCase();
            let lang = 'hi';
            if (browserLang.startsWith('ur')) lang = 'ur';
            else if (browserLang.startsWith('en')) lang = 'en';

            this.setPreference(lang);
        }
    }

    setPreference(lang) {
        localStorage.setItem(this.prefKey, lang);
        // Sync to cookie so server side PHP can read it
        document.cookie = `${this.prefKey}=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    }

    bindEvents() {
        // Find language selection elements and track clicks
        const switchers = document.querySelectorAll('.rcb-lang-switch-btn');
        switchers.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetLang = btn.getAttribute('data-lang');
                if (targetLang) {
                    this.setPreference(targetLang);
                }
            });
        });
    }
}

new RCB_Translation_Engine();
```

---

## 4. Localized Dynamic String Dictionary

Use this structural map in your translation template calls (`__()` in PHP or matching custom keys in JS):

| String ID | Hindi Translation (Default) | English Translation | Urdu Translation |
| :--- | :--- | :--- | :--- |
| `nav_home` | होम | Home | ہوم |
| `nav_about` | हमारे बारे में | About Us | ہمارے بارے میں |
| `nav_areas` | इलाक़े (क्षेत्र) | Areas | علاقے |
| `nav_matrimonial` | निकाह और शादी-ब्याह | Matrimonial | شادی بیاہ |
| `nav_education` | तालीम और करियर | Education & Careers | تعلیم اور روزگار |
| `donate_now` | तआवुन (सहयोग) करें | DONATE NOW | ابھی عطیہ کریں |
| `registered_society` | सरकारी रजिस्टर्ड सोसायटी | Govt. Registered Society | سرکاری رجسٹرڈ سوسائٹی |
| `tax_deduction` | धारा 80G टैक्स छूट सक्रिय | Section 80G Active | دفعہ 80G ٹیکس چھوٹ فعال |
| `search_placeholder` | सूबा, ज़िला, तहसील खोजें... | Search State, District... | صوبہ، ضلع اور تحصیل تلاش کریں... |

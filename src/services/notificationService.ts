// ============================================================================
// ENTERPRISE NOTIFICATION & ANNOUNCEMENT ENGINE
// Supports Website Notifications, Email Notifications, SMS hook, WhatsApp hook,
// Push Notifications hook, and Announcement Bar state control.
// ============================================================================

export type NotificationChannel = 'website' | 'email' | 'sms' | 'whatsapp' | 'push' | 'announcement_bar';

export interface SystemNotificationItem {
  id: string;
  titleEn: string;
  titleHi: string;
  messageEn: string;
  messageHi: string;
  category: 'System' | 'Event' | 'Scholarship' | 'Job' | 'Mahapanchayat' | 'Emergency';
  targetRole: 'All' | 'Member' | 'Volunteer' | 'Committee' | 'Admin';
  channels: NotificationChannel[];
  timestamp: string;
  isRead: boolean;
  linkTab?: string;
}

const NOTIF_STORAGE_KEY = 'rcb_enterprise_notification_center';
const ANNOUNCEMENT_STORAGE_KEY = 'rcb_enterprise_announcement_bar_config';

export class NotificationService {
  private static notifs: SystemNotificationItem[] | null = null;

  /**
   * Initialize notification center
   */
  static init(): SystemNotificationItem[] {
    if (this.notifs) return this.notifs;
    try {
      const stored = localStorage.getItem(NOTIF_STORAGE_KEY);
      if (stored) {
        this.notifs = JSON.parse(stored);
        return this.notifs!;
      }
    } catch (e) {
      console.error('Failed to load notification center:', e);
    }

    const now = new Date().toISOString();
    const initialNotifs: SystemNotificationItem[] = [
      {
        id: 'NOTIF-101',
        titleEn: '🚀 Architecture Upgrade Complete: Enterprise Database Online',
        titleHi: '🚀 सिस्टम अपग्रेड संपन्न: एंटरप्राइज डेटाबेस ऑनलाइन',
        messageEn: 'The portal is now running on a centralized database with full Role-Based Access Control, automated reports, and multi-channel notifications.',
        messageHi: 'पोर्टल अब एक केंद्रीकृत डेटाबेस पर चल रहा है जिसमें पूर्ण भूमिका-आधारित पहुँच नियंत्रण, स्वचालित रिपोर्ट और मल्टी-चैनल अलर्ट शामिल हैं।',
        category: 'System',
        targetRole: 'All',
        channels: ['website', 'email'],
        timestamp: now,
        isRead: false,
        linkTab: 'portal'
      },
      {
        id: 'NOTIF-102',
        titleEn: '🎓 National Scholarship Application Deadline Extension',
        titleHi: '🎓 राष्ट्रीय छात्रवृत्ति आवेदन की अंतिम तिथि बढ़ाई गई',
        messageEn: 'Minority welfare scholarship applications for FY 2026-27 are now open until 31st August 2026. Submit your verification documents online.',
        messageHi: 'वित्तीय वर्ष 2026-27 के लिए अल्पसंख्यक कल्याण छात्रवृत्ति आवेदन अब 31 अगस्त 2026 तक खुले हैं। अपने सत्यापन दस्तावेज ऑनलाइन जमा करें।',
        category: 'Scholarship',
        targetRole: 'All',
        channels: ['website', 'sms', 'whatsapp'],
        timestamp: new Date(Date.now() - 3600 * 1000 * 5).toISOString(),
        isRead: false,
        linkTab: 'welfare-scholarships'
      },
      {
        id: 'NOTIF-103',
        titleEn: '🏛️ Mahapanchayat Resolution RES-2026-01 Officially Approved',
        titleHi: '🏛️ महापंचायत प्रस्ताव RES-2026-01 आधिकारिक रूप से स्वीकृत',
        messageEn: 'The resolution on strict dowry prohibition and simplification of Nikah ceremonies has been passed by 384 delegate votes.',
        messageHi: 'दहेज प्रथा पर पूर्ण प्रतिबंध और निकाह समारोहों को सरल बनाने का प्रस्ताव 384 प्रतिनिधियों के मतों से पारित हो गया है।',
        category: 'Mahapanchayat',
        targetRole: 'Committee',
        channels: ['website', 'email', 'whatsapp'],
        timestamp: new Date(Date.now() - 3600 * 1000 * 24).toISOString(),
        isRead: true,
        linkTab: 'mahapanchayat-resolutions'
      }
    ];

    this.notifs = initialNotifs;
    this.save();
    return this.notifs;
  }

  static save(): void {
    if (!this.notifs) return;
    try {
      localStorage.setItem(NOTIF_STORAGE_KEY, JSON.stringify(this.notifs));
      window.dispatchEvent(new CustomEvent('rcb_notifs_updated', { detail: { unread: this.getUnreadCount() } }));
    } catch (e) {
      console.error('Failed to save notification center:', e);
    }
  }

  static getAll(): SystemNotificationItem[] {
    return this.init();
  }

  static getUnreadCount(): number {
    return this.init().filter(n => !n.isRead).length;
  }

  static markAsRead(id: string): void {
    const all = this.init();
    const item = all.find(n => n.id === id);
    if (item) {
      item.isRead = true;
      this.save();
    }
  }

  static markAllAsRead(): void {
    const all = this.init();
    all.forEach(n => n.isRead = true);
    this.save();
  }

  /**
   * Broadcast a multi-channel notification with future hooks (SMS, WhatsApp, Push)
   */
  static broadcast(payload: {
    titleEn: string;
    titleHi: string;
    messageEn: string;
    messageHi: string;
    category: 'System' | 'Event' | 'Scholarship' | 'Job' | 'Mahapanchayat' | 'Emergency';
    targetRole: 'All' | 'Member' | 'Volunteer' | 'Committee' | 'Admin';
    channels: NotificationChannel[];
    linkTab?: string;
  }): { success: boolean; dispatchedChannels: string[]; logMessage: string } {
    const all = this.init();
    const newId = `NOTIF-${Math.floor(1000 + Math.random() * 9000)}`;

    const newItem: SystemNotificationItem = {
      id: newId,
      titleEn: payload.titleEn,
      titleHi: payload.titleHi,
      messageEn: payload.messageEn,
      messageHi: payload.messageHi,
      category: payload.category,
      targetRole: payload.targetRole,
      channels: payload.channels,
      timestamp: new Date().toISOString(),
      isRead: false,
      linkTab: payload.linkTab
    };

    all.unshift(newItem);
    this.save();

    // Execute channel simulators / future hooks
    const dispatched: string[] = ['Website Alert Center'];
    if (payload.channels.includes('email')) dispatched.push('Email Gateway (SMTP Dispatch Queue)');
    if (payload.channels.includes('sms')) dispatched.push('SMS Gateway Hook (Twilio/MSG91 ready)');
    if (payload.channels.includes('whatsapp')) dispatched.push('WhatsApp Cloud API Webhook');
    if (payload.channels.includes('push')) dispatched.push('Firebase Cloud Messaging (FCM Push)');
    if (payload.channels.includes('announcement_bar')) {
      this.updateAnnouncementBar({ active: true, textEn: payload.titleEn + ' - ' + payload.messageEn, textHi: payload.titleHi + ' - ' + payload.messageHi });
      dispatched.push('Top Announcement Banner');
    }

    return {
      success: true,
      dispatchedChannels: dispatched,
      logMessage: `Notification [${newId}] dispatched successfully across ${dispatched.length} channels to target group '${payload.targetRole}'.`
    };
  }

  /**
   * Get/Set Announcement Bar Config
   */
  static getAnnouncementBar(): { active: boolean; textEn: string; textHi: string } {
    try {
      const stored = localStorage.getItem(ANNOUNCEMENT_STORAGE_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return {
      active: true,
      textEn: '📢 National Scholarship Applications 2026 are now OPEN! Apply before 31st August 2026. | National Career Seminar in Jaipur on 5th Aug.',
      textHi: '📢 राष्ट्रीय छात्रवृत्ति आवेदन 2026 अब खुले हैं! 31 अगस्त 2026 से पहले आवेदन करें। | 5 अगस्त को जयपुर में राष्ट्रीय करियर संगोष्ठी।'
    };
  }

  static updateAnnouncementBar(config: { active: boolean; textEn: string; textHi: string }): void {
    localStorage.setItem(ANNOUNCEMENT_STORAGE_KEY, JSON.stringify(config));
    window.dispatchEvent(new CustomEvent('rcb_announcement_changed', { detail: config }));
  }
}

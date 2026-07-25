/**
 * Centralized Education Image Library for All India Rangrez Community Platform
 * 
 * Contains all raw Google Drive image links provided for Care Point Classes, Educational
 * Programs, Community Meetings, and Reform Initiatives.
 * 
 * Features:
 * - Single source of truth ("educationGalleryImages")
 * - Automatic deduplication by Google Drive File ID
 * - Instant conversion to direct high-res `lh3.googleusercontent.com` URLs
 * - Built-in validation status tracking & localStorage/sessionStorage caching
 * - Lazy loading support & retry logic
 */

import { resolveDriveUrl } from '../lib/driveUtils';

// Raw list of Google Drive image links provided by community
export const RAW_EDUCATION_IMAGE_URLS: string[] = [
  'https://drive.google.com/file/d/1dhs5_qpWciFRJH_7-TmIWVW1WsAMDUD-/view?usp=sharing',
  'https://drive.google.com/file/d/1HtFQ6xbNcnkBhrWzxR5JNUBfVKz8zOLb/view?usp=sharing',
  'https://drive.google.com/file/d/1q_S3ulN-MSeCyRDW795ULiMtzLC4H6W0/view?usp=sharing',
  'https://drive.google.com/file/d/1lbbh_6mc3vT1SU4EuJq_M_aiCqYtnqqd/view?usp=sharing',
  'https://drive.google.com/file/d/1UQJtoV_c0LPFNNQoIfA-r6RgJtUl-rO-/view?usp=sharing',
  'https://drive.google.com/file/d/1Qw-T1T55mG6e4qcJ97Luc4c3C4OT3ako/view?usp=sharing',
  'https://drive.google.com/file/d/1cXjteCKlgz05BSiEWU0jDGZgWFxaFmx0/view?usp=sharing',
  'https://drive.google.com/file/d/1-azK_fpKY3go0oezlRKKgTueyCnOPt7R/view?usp=sharing',
  'https://drive.google.com/file/d/1-b-1i1ES-o1Eo2FLQIdBJVZM3NuNPiYc/view?usp=sharing',
  'https://drive.google.com/file/d/1-vmMjWFwFS9UAVpkvJ1f0GBHkGADHAVh/view?usp=sharing',
  'https://drive.google.com/file/d/10CoqgXSsG5Zpkv17fNYePL9AlpsKGj3u/view?usp=sharing',
  'https://drive.google.com/file/d/10YoDuzRWtGkFuCeKxHDR8SgohIEaWvPt/view?usp=sharing',
  'https://drive.google.com/file/d/10ycTTTbHnwJKUSaRyq-YI9C8Y6HFBw83/view?usp=sharing',
  'https://drive.google.com/file/d/11GQ8iak8xBBhelMuvKVhUDEFwK9NBed0/view?usp=sharing',
  'https://drive.google.com/file/d/120grrrfO9XdiuLr17ZD6MJt8CphReyEM/view?usp=sharing',
  'https://drive.google.com/file/d/121dCHPR8Czzh2UACk3BVOrqDynuGWvRe/view?usp=sharing',
  'https://drive.google.com/file/d/12LhMQLa_Wy5NJRbXnOEpPDWBlxWOVIqd/view?usp=sharing',
  'https://drive.google.com/file/d/12y0ZcVn6hASuylD5ULP-Y5hz-_eFOujg/view?usp=sharing',
  'https://drive.google.com/file/d/136WCISOjwPf2yygLQDwnUwYBsx_cNaQ-/view?usp=sharing',
  'https://drive.google.com/file/d/13s4aSjPokGZNVs3uMF8h-uq9wwUm1dCL/view?usp=sharing',
  'https://drive.google.com/file/d/13wnDqSyuXf98EpeEezow-KVnuVyJkK4R/view?usp=sharing',
  'https://drive.google.com/file/d/14GkLnsy_iJ9gt600G0vRBW6_L_RSUNuW/view?usp=sharing',
  'https://drive.google.com/file/d/14jPQBn7sVtEIxCNPG-ExlwCMet7l42Mf/view?usp=sharing',
  'https://drive.google.com/file/d/14nLCCcFWwaocpR1UdPinnGFj0HDEZCms/view?usp=sharing',
  'https://drive.google.com/file/d/150xMou5wpQfiMVE7V_KmK6pgyZdjoNUc/view?usp=sharing',
  'https://drive.google.com/file/d/15hO5khz8KBFgzAyw2VNcolFB7R_RSfF9/view?usp=sharing',
  'https://drive.google.com/file/d/15lNXq9DZANSt-KhaYSvxiM2fVszneRoX/view?usp=sharing',
  'https://drive.google.com/file/d/16ygCmjxLgdYbqUVtywS13arzJu4sWs4o/view?usp=sharing',
  'https://drive.google.com/file/d/17EA8g_7xZchhXkVWBHWFbJirXN-Uuthk/view?usp=sharing',
  'https://drive.google.com/file/d/19JRN-Gi-S3IKzi72Fo9r1NorhxtC2b-o/view?usp=sharing',
  'https://drive.google.com/file/d/19TMeVvOS1ARhusACZCenjQQrXxdDglSp/view?usp=sharing',
  'https://drive.google.com/file/d/1A79xxztNgDp9YdJx7WtxjIjoIUfuaVMA/view?usp=sharing',
  'https://drive.google.com/file/d/1Bc3UnnCZm_WKWueuMB3-6B1GQ1ND97rq/view?usp=sharing',
  'https://drive.google.com/file/d/1BnBLqcV-KcxZhp4S6JVohn6He-mV_FZO/view?usp=sharing',
  'https://drive.google.com/file/d/1BoGH9OOOavP8PqVcKd3pmhCcScbI45Fz/view?usp=sharing',
  'https://drive.google.com/file/d/1BtLGLRN9Z-GJmHulw7sl6acOYwmoWxmh/view?usp=sharing',
  'https://drive.google.com/file/d/1C03hUQ7rd6eAwoKx4qpeKlkBK563L-ha/view?usp=sharing',
  'https://drive.google.com/file/d/1CNQlRrDBxRQz4m92vAbvCW_B5kXNYrwL/view?usp=sharing',
  'https://drive.google.com/file/d/1DE6gdm7rB0vpKQipZsqtrY2kS-DGs2Es/view?usp=sharing',
  'https://drive.google.com/file/d/1EhcSokYbofbjJbYYyTGAhH-3vfOZnZKm/view?usp=sharing',
  'https://drive.google.com/file/d/1GpXGB-eoijWLmA4R4_iPASYAPosAQ40o/view?usp=sharing',
  'https://drive.google.com/file/d/1GptyMiilVUK3E6p2vUrsUE7TDJbcEOqp/view?usp=sharing',
  'https://drive.google.com/file/d/1Hzlceev92qtMyb5AGBoaGWwAgIEIBFWP/view?usp=sharing',
  'https://drive.google.com/file/d/1IWRjy-5v1SKnbAz3sZ6-RaBLOV4QXWJb/view?usp=sharing',
  'https://drive.google.com/file/d/1K2II-KBfjCEQzrbXbVC6m-6W0WCFrAVU/view?usp=sharing',
  'https://drive.google.com/file/d/1KH7dSx5p3A6OKlW46hti324nk2FPX7mC/view?usp=sharing',
  'https://drive.google.com/file/d/1LTGzwNLFXgqi1Jg72KCUWghBQEuwpmzW/view?usp=sharing',
  'https://drive.google.com/file/d/1N-lYJrWDjhEpe7YXB-PtDTQVirb7spNp/view?usp=sharing',
  'https://drive.google.com/file/d/1PhBQRj3CxJ4Xq7uLKgIZyoI8VTTIXD-i/view?usp=sharing',
  'https://drive.google.com/file/d/1Phx-fXpcDgXd76IMiHtTvqgVJ4kM2CrS/view?usp=sharing',
  'https://drive.google.com/file/d/1QbNqwx2QTmupkPM6Q43cuT273eULBRk4/view?usp=sharing',
  'https://drive.google.com/file/d/1R-5UJg9w3qkwS8R-qJtEAuILD1FaH4Rk/view?usp=sharing',
  'https://drive.google.com/file/d/1RYiobRz_eKwGjrb6R5RhfdlQK-Sh-s2c/view?usp=sharing',
  'https://drive.google.com/file/d/1RZEDbv-LcKZ_1-bvAZ0fhT9-bwXBURu1/view?usp=sharing',
  'https://drive.google.com/file/d/1St1ByLzx5PBzjEw3D-E0-FAoX6wJFpJo/view?usp=sharing',
  'https://drive.google.com/file/d/1VGKhG3JSE_Ivd8tgnechNK6vFC-bi1AI/view?usp=sharing',
  'https://drive.google.com/file/d/1VV3_KD6PCSdBjJk-SA4Jo7HYFRquSevz/view?usp=sharing',
  'https://drive.google.com/file/d/1WbOjkwu2Xwbjk0oIJR7FCEGH38z2s_3t/view?usp=sharing',
  'https://drive.google.com/file/d/1WxfwifvdBqneUTqnEg8p5orDTA1wR1Wl/view?usp=sharing',
  'https://drive.google.com/file/d/1XRf6eGy15ZoRCPKoVso9lHJeAgTWYfph/view?usp=sharing',
  'https://drive.google.com/file/d/1XZdw_9Rq3At9K0TKyuSFlC_G_sTMB_dI/view?usp=sharing',
  'https://drive.google.com/file/d/1YGuJkwrqSj16RxoRX40HJS1J4X9_XDAc/view?usp=sharing',
  'https://drive.google.com/file/d/1YOkt1MU9SiN-VklQ0tKg4_kWOjRzhP3H/view?usp=sharing',
  'https://drive.google.com/file/d/1_Cvb-bPZhs704r8CICBgV6ZlnxOUFtio/view?usp=sharing',
  'https://drive.google.com/file/d/1_MLNZ2GaVsBS4JlcXP6Dwq7MLYvomLBA/view?usp=sharing',
  'https://drive.google.com/file/d/1_qTZPZInQB65YHOEXLM0qTrmdAnNvBim/view?usp=sharing',
  'https://drive.google.com/file/d/1_rjkNQBSHSntHjj1s9JZt2hIOjj0r7CM/view?usp=sharing',
  'https://drive.google.com/file/d/1a8U2TX6NVB91z25ncuAHj9r1OBiCgkd5/view?usp=sharing',
  'https://drive.google.com/file/d/1aLhv5LRRifxPag3qg3lFQsDLelxJxvoX/view?usp=sharing',
  'https://drive.google.com/file/d/1aTkA0hJGRBLEnhlxzNcDz2wmbkhXeRoR/view?usp=sharing',
  'https://drive.google.com/file/d/1b45UVJGMwTVaifaAaZIzhvJLy4P3Egib/view?usp=sharing',
  'https://drive.google.com/file/d/1bhpGySRVzkf8c9pbLKnbvBpKPoIZeZlb/view?usp=sharing',
  'https://drive.google.com/file/d/1bjqjXlt7WttPhQA9KRTqznwIbZRmyKE6/view?usp=sharing',
  'https://drive.google.com/file/d/1cSAghmCZtsrzRbX-tqaOT6hamOk7Pacw/view?usp=sharing',
  'https://drive.google.com/file/d/1eVus3PS1UDjKexec9aDMFYGowJaVEx_t/view?usp=sharing',
  'https://drive.google.com/file/d/1gP3X1mJnG5hr83o-wzYYq1kl824s43lM/view?usp=sharing',
  'https://drive.google.com/file/d/1haU6fjhVtONKfSVA4fAtOtyGF734WqGq/view?usp=sharing',
  'https://drive.google.com/file/d/1i7qVWHxvE3jctU8aXB2Zlf6IBFL-DiIX/view?usp=sharing',
  'https://drive.google.com/file/d/1ikSbZheQ1O19nQXHnscMxZXajc2Hv6v-/view?usp=sharing',
  'https://drive.google.com/file/d/1juIfuiIB0T6nVn-BwJ2NLByGrp6BamEZ/view?usp=sharing',
  'https://drive.google.com/file/d/1k9JnpievkHABF6zXGuMk39NR69ZDbxyb/view?usp=sharing',
  'https://drive.google.com/file/d/1kaMd6n_FuYunFqB7JFQWFW6vaGD14qbV/view?usp=sharing',
  'https://drive.google.com/file/d/1krGXWKL-LBV4JPRByBA_oI1FV8p9O136/view?usp=sharing',
  'https://drive.google.com/file/d/1lhunzRQK-1aa202GTeS40CaqfmeoozxA/view?usp=sharing',
  'https://drive.google.com/file/d/1ofE9nJr_63hvU9-F1aYtasQutolmbBVR/view?usp=sharing',
  'https://drive.google.com/file/d/1qT_PX67q7A0XkpP-xRaFSxks2FBvBDsg/view?usp=sharing',
  'https://drive.google.com/file/d/1qm4n3aMnKoJq1ePVtZfuV0TSkMR2EIuV/view?usp=sharing',
  'https://drive.google.com/file/d/1sB65IkGjYUemB7On6z5ubXu4N9XaSWBz/view?usp=sharing',
  'https://drive.google.com/file/d/1sxLlJ9Q3JLZSwHDf-8gYlV5kgfmh2ddZ/view?usp=sharing',
  'https://drive.google.com/file/d/1tDkI3-fvHEJkgo3m4Hpce-N_jQV3TnJg/view?usp=sharing',
  'https://drive.google.com/file/d/1tSHlspjzKhSeY54rNpxG8K_yBEURMuy_/view?usp=sharing',
  'https://drive.google.com/file/d/1thhwbdX-xTk4mxv_qRMjutYXoImN0UYI/view?usp=sharing',
  'https://drive.google.com/file/d/1tjhLROJA69JyK10vey1U0KIUeU9Jfy71/view?usp=sharing',
  'https://drive.google.com/file/d/1v9YpfDSKjv9Yvym9XM5USqtQto8JU6d2/view?usp=sharing',
  'https://drive.google.com/file/d/1vMM9hxEQip_zpLU-5l-1Nz3Zo7JaPtMu/view?usp=sharing',
  'https://drive.google.com/file/d/1vs3mAPzT-Tp4i2KFSzEqXv2F-CX2p9gZ/view?usp=sharing',
  'https://drive.google.com/file/d/1w-2S5o9UDzJGx97s4z1bB0mTomRZcLHz/view?usp=sharing',
  'https://drive.google.com/file/d/1wxQx4bB7w3Zf85nlzFmj4LOdKZLRIP-_/view?usp=sharing',
  'https://drive.google.com/file/d/1yS5aoYII2BCE_MVuxUxtkdwQ14Ic_WsG/view?usp=sharing',
  'https://drive.google.com/file/d/1zfymIAV8QJfbyDCkaY2dB92fEpoimWbz/view?usp=sharing',
  'https://drive.google.com/file/d/1-QUg0PVnwlsZftzzknwLVW8kbSFAIXWJ/view?usp=sharing',
  'https://drive.google.com/file/d/1-hrLzPoTrJWkgyO1kVZRAapbXBerJWc2/view?usp=sharing',
  'https://drive.google.com/file/d/10xoKcB9MQ7upl-AZOwnBNIn9DhQ6J_pX/view?usp=sharing',
  'https://drive.google.com/file/d/12DnLWellCmY71eCJ2-t9uKJ6w8VwMf6m/view?usp=sharing',
  'https://drive.google.com/file/d/139eerTSahfk86x1DjLbceiOIsq69eemO/view?usp=sharing',
  'https://drive.google.com/file/d/13N-z8o3pGJyx-mlZN4A_h4bC5mkWmIqa/view?usp=sharing',
  'https://drive.google.com/file/d/13fNduTpNAb300sC4hDIG4yaLC_6kxdnu/view?usp=sharing',
  'https://drive.google.com/file/d/15nN3vjSMUGPIJl-1ft0cyPQr9VqGeY_T/view?usp=sharing',
  'https://drive.google.com/file/d/15rK_eHAp7sFtreTOFUfQggAmofI1ZZ9p/view?usp=sharing',
  'https://drive.google.com/file/d/167cJ15LsCg8JXGaOIzdwfY3nZy-F7rA9/view?usp=sharing',
  'https://drive.google.com/file/d/16KgZLn-8n-PnoCnDZ1Wb-mb_tqVPPIis/view?usp=sharing',
  'https://drive.google.com/file/d/16Y54fbVLd8UTDfzTkF7-emSoc2xXlY38/view?usp=sharing',
  'https://drive.google.com/file/d/16i5FglXTRp9ir5_Z5rQiGDIJzKlob81c/view?usp=sharing',
  'https://drive.google.com/file/d/17PE6jdvYhVW24SA7vTY2uDdpahNUxm4O/view?usp=sharing',
  'https://drive.google.com/file/d/17df9w0j6OKfsyd-Rl2G3E3M4GKpxQH7N/view?usp=sharing',
  'https://drive.google.com/file/d/185gXWJNvYvMuoluh8sdkZmjwVAYlUlX7/view?usp=sharing',
  'https://drive.google.com/file/d/18G-ANEXJuwj6346vWGAVBaEy5kuyLiLl/view?usp=sharing',
  'https://drive.google.com/file/d/18GhkjBcOXlcskwnZzRaiufT0qM-d6yFj/view?usp=sharing',
  'https://drive.google.com/file/d/18HjzW_sTnOr7e7rgG3Iz4Cbi-b4NLAbV/view?usp=sharing',
  'https://drive.google.com/file/d/18aF8MUrQGhTrQFsyASJUI3zmvdRu2zCq/view?usp=sharing',
  'https://drive.google.com/file/d/18xw4eI0j0zj8SsScDzskHsSebrYFxvp_/view?usp=sharing',
  'https://drive.google.com/file/d/19Hj7govilr8lXfKGtaJpV7c3-LZo8VLs/view?usp=sharing',
  'https://drive.google.com/file/d/19MaAbQF7ZJ77syXy3M6ZDIVautkhaEnl/view?usp=sharing',
  'https://drive.google.com/file/d/19TTZTgD7ouZSFNx_0PUm0lb6J_keuCLP/view?usp=sharing',
  'https://drive.google.com/file/d/19nGYR03ik9jkuVVROhJpu0JZVAHpR8h5/view?usp=sharing',
  'https://drive.google.com/file/d/1A6djR4GcHdqP8rYR3plQUElRhEGIWFuA/view?usp=sharing',
  'https://drive.google.com/file/d/1A8DU1j-jEf4PsO8lg33C5lNypX5ww5EP/view?usp=sharing',
  'https://drive.google.com/file/d/1AEnXcABHpYt0v77oQBGZoqwZfu74F0s5/view?usp=sharing',
  'https://drive.google.com/file/d/1AVhk5x8aypiobW6EEunBaoNXZxDTdLqC/view?usp=sharing',
  'https://drive.google.com/file/d/1AwDUVMBOsmExkhGXGT3zLJytexdAVF7f/view?usp=sharing',
  'https://drive.google.com/file/d/1C0sExHcQBvtsPbHeiSOf8SGqkfWkqZjV/view?usp=sharing',
  'https://drive.google.com/file/d/1C8RVZEa2LEvFOIbTZhh4MFw5_2a7aI8e/view?usp=sharing',
  'https://drive.google.com/file/d/1CmYcVqJaUEqm2V7_BcsOsGIEDoIte4Ea/view?usp=sharing',
  'https://drive.google.com/file/d/1DGlCKrTs8mfnZVMnudHnQFyXYZG-5RMT/view?usp=sharing',
  'https://drive.google.com/file/d/1ENxY4zqsKBnhT0QQ056V5_xkyJYTahdA/view?usp=sharing',
  'https://drive.google.com/file/d/1ESDvhSCuBzOyANQ4euLBBkixq7glsD38/view?usp=sharing',
  'https://drive.google.com/file/d/1EwPMQavHRnBiu0U4AKD6FDceOSBsk-yZ/view?usp=sharing',
  'https://drive.google.com/file/d/1F7MZ-6uSoawLzOx89L1na3liY8OebIl1/view?usp=sharing',
  'https://drive.google.com/file/d/1FA4BYkahAD2bi0f8aoGeMAuIaWs5y37O/view?usp=sharing',
  'https://drive.google.com/file/d/1Fe_wQyU1R09xEaftG6xxegNohG9dxZIl/view?usp=sharing',
  'https://drive.google.com/file/d/1IT6M9LYJ2-a9rz_TOHSxOf-92CRf9M7Y/view?usp=sharing',
  'https://drive.google.com/file/d/1IhdnLcoSxWNN4ikzqt1I9zGy2_E2Z8GZ/view?usp=sharing',
  'https://drive.google.com/file/d/1K9YOG8G9F7F4Yk0N_rT6eRD2K5V0OAP_/view?usp=sharing',
  'https://drive.google.com/file/d/1La92jIrh7X7Il1tui03z--LxCA9hQpiq/view?usp=sharing',
  'https://drive.google.com/file/d/1Llv7O_0QplwX3yT0vUkUosejTh_ric1T/view?usp=sharing',
  'https://drive.google.com/file/d/1MifNaaTBijPJzqwcujHvVWnS0ZakIqzX/view?usp=sharing',
  'https://drive.google.com/file/d/1Mjp0TBI0wEauh1IUX6klJtBiZrIsKqFr/view?usp=sharing',
  'https://drive.google.com/file/d/1NdxVBQqtELDWU7EXr_wtXAjTusxu12gl/view?usp=sharing',
  'https://drive.google.com/file/d/1NkYwdw_I3RIU3ZsYb5-263nSXlfO6Cfp/view?usp=sharing',
  'https://drive.google.com/file/d/1Omvocjz3JGkLC-U5fyRU4OrtkqnsxA6m/view?usp=sharing',
  'https://drive.google.com/file/d/1Oy49E23TjXi9zaObA1WNBjNBYNxoTtIf/view?usp=sharing',
  'https://drive.google.com/file/d/1P1f6dSrBjYrVZuocWw1giIdar5aLalUb/view?usp=sharing',
  'https://drive.google.com/file/d/1PC_5ajEkaT2NAd9qtfk267u2SvSZ1Vq7/view?usp=sharing',
  'https://drive.google.com/file/d/1Pn_oG53w2dRi0IbuHkWVq0rR03trN61H/view?usp=sharing',
  'https://drive.google.com/file/d/1R3Q2S8E8Nl-rpgmJPGTLhU7Oaz6DDiug/view?usp=sharing',
  'https://drive.google.com/file/d/1Ro1ionImOC5SNA5gv3OkhVOgp2aCmMmw/view?usp=sharing',
  'https://drive.google.com/file/d/1S4AzKGIpDpj3UAGY2IE2fYUD0JwLrBm8/view?usp=sharing',
  'https://drive.google.com/file/d/1SN7rYifSjkFw3JQYXC3x7K50uCxWPAj2/view?usp=sharing',
  'https://drive.google.com/file/d/1TMbD8qLLagVAVabLi-1ZMJHcQInbQ1NJ/view?usp=sharing',
  'https://drive.google.com/file/d/1TN5CMC_3XV9u-Z-HXihmZlhRqV87D6Li/view?usp=sharing',
  'https://drive.google.com/file/d/1TmsgYEAk8pVwJ8Jv8pVVq4BnaNXb6Ynb/view?usp=sharing',
  'https://drive.google.com/file/d/1TpbrVAuxzxt8gGoPxVCzL5LEdkPT6VyQ/view?usp=sharing',
  'https://drive.google.com/file/d/1UCJHPeYWuVUu2-uDQc3AJxTjCD6CCeNN/view?usp=sharing',
  'https://drive.google.com/file/d/1UZZd9d46Kig2K8YROUwgkAIHRPs96iWh/view?usp=sharing',
  'https://drive.google.com/file/d/1UxhVFeZDMtDJdcFx1wyKV9EZpiLnLQmJ/view?usp=sharing',
  'https://drive.google.com/file/d/1V9LTt1EhPeyqYb-BQfgxcFYZGucfEEAe/view?usp=sharing',
  'https://drive.google.com/file/d/1VQfH8NT6VQxHVxDDtJCWoGJKSrH4_INA/view?usp=sharing',
  'https://drive.google.com/file/d/1VX55XwtWiFQiaJcbILHsJvhOco-UTYKV/view?usp=sharing',
  'https://drive.google.com/file/d/1Ve3UUjs8C8pwxZpjhP7nSPpt6L6h2m_4/view?usp=sharing',
  'https://drive.google.com/file/d/1VyBqhnP1CHyoYNYoqfF8oiq5raQic-3V/view?usp=sharing',
  'https://drive.google.com/file/d/1W2zcLGlp5O32U2rUp-vF1JzP4WjM-v1m/view?usp=sharing',
  'https://drive.google.com/file/d/1WKjPlXXUsTTf5wi7vMIVqZfBtMG9Bn5_/view?usp=sharing',
  'https://drive.google.com/file/d/1WiFMT53iVNMQNKqf27RDTBBUqHZzQEYM/view?usp=sharing',
  'https://drive.google.com/file/d/1XC_wD48gAuUKDZAswQfLx1bKe0jpDbD4/view?usp=sharing',
  'https://drive.google.com/file/d/1XlQplH9GYzsvn6gnSdLFGe30hTeE_Ckx/view?usp=sharing',
  'https://drive.google.com/file/d/1XyXTTgTBWtjsmWAnH9-5SxqLFtY5DOLi/view?usp=sharing',
  'https://drive.google.com/file/d/1YOr0_BAKv22sWvLC9JPQiLxHFApIERm2/view?usp=sharing',
  'https://drive.google.com/file/d/1YW7AqhONm4P62bAZANE9Bk94YjmnbOWq/view?usp=sharing',
  'https://drive.google.com/file/d/1YdwBxFahr4iX_q-4qI_iCGtMK-fVdxCx/view?usp=sharing',
  'https://drive.google.com/file/d/1YtgQWkP1nEBujAy4nmC9QC75a_GO27aZ/view?usp=sharing',
  'https://drive.google.com/file/d/1ZRXQ-RdIWnka_aBO-3-mPMxKnGZRZRrU/view?usp=sharing',
  'https://drive.google.com/file/d/1Zae1DfkV7W_y2yw2knncLQt0eW99YB6-/view?usp=sharing',
  'https://drive.google.com/file/d/1_V6t9Rzg9luTVOyxGzz8u8GdHrHKhFo9/view?usp=sharing',
  'https://drive.google.com/file/d/1aQJqeNSFcCWpXMQdgcZu_rMshekJxB7T/view?usp=sharing',
  'https://drive.google.com/file/d/1ahDMITxVpsKn_3WLCrUV_PZYN9S_gB1F/view?usp=sharing',
  'https://drive.google.com/file/d/1bsLkoIPPtvFoXOyLhx8UEZuuF5cb23Gl/view?usp=sharing',
  'https://drive.google.com/file/d/1bzIG1eK031Bm8z9Zwf37gQ07oU3LEN7I/view?usp=sharing',
  'https://drive.google.com/file/d/1cKDm4Wyug9DWbyw3or1Wvsh0ZEmCo894/view?usp=sharing',
  'https://drive.google.com/file/d/1d0mAGSGRw2to7imJTX6OdzOtMXtEoAY3/view?usp=sharing',
  'https://drive.google.com/file/d/1d4YnivgDNGIyaVcnUHg8XBhXmA4-VoP6/view?usp=sharing',
  'https://drive.google.com/file/d/1dNXZIK2nPfRxdNJ4Bv1_TndzEEI9CidK/view?usp=sharing',
  'https://drive.google.com/file/d/1dZM4hWU84C_0ldYINnFlH-WfghHo104a/view?usp=sharing',
  'https://drive.google.com/file/d/1dnYrn5hXMvGWvNmkG0H7ir70B8f7hw95/view?usp=sharing',
  'https://drive.google.com/file/d/1do0quE9iNXaNAowTIsKLIdVPjM7oTNBH/view?usp=sharing',
  'https://drive.google.com/file/d/1egfTRZePHvx3X4kQ4_vT5A58cyOcE1Aa/view?usp=sharing',
  'https://drive.google.com/file/d/1f9KkbFBqIBg5OHIQh5VnQm3-mk9Ox_A4/view?usp=sharing',
  'https://drive.google.com/file/d/1f9XFCGz0rL9j6Np2djHWFzJk7qfFrzHr/view?usp=sharing',
  'https://drive.google.com/file/d/1fbFtZFz1pyUuVdx6r5Fv9jRtcBNV9OFx/view?usp=sharing',
  'https://drive.google.com/file/d/1g5INC8ro_Zx1ka-ehQbhOP7iWjztVJsU/view?usp=sharing',
  'https://drive.google.com/file/d/1gH0wpfK2dij_2x5DUAGQB7QcK817bLY6/view?usp=sharing',
  'https://drive.google.com/file/d/1gNTM99jYG5ChO5VKInZweqd3aTaRP-ES/view?usp=sharing',
  'https://drive.google.com/file/d/1gsp9EjZ2tBMB0f0dMTbH-C2OR9omKhcd/view?usp=sharing',
  'https://drive.google.com/file/d/1h2dE_YIMqe9WvY6u81VB3ftv3tl6yUoE/view?usp=sharing',
  'https://drive.google.com/file/d/1hB2wrH-HLEW9z9QoutHAC6tri9PQfQdV/view?usp=sharing',
  'https://drive.google.com/file/d/1hqhlrQvjLrvF3GO2BJeBzn7j-EzYd6SO/view?usp=sharing',
  'https://drive.google.com/file/d/1iDW8eItRNLuEjNdb6fAcnf3Qj6vZ7AIq/view?usp=sharing',
  'https://drive.google.com/file/d/1iKTfjOf19EI6kE76SQpq0KzxuReWyP76/view?usp=sharing',
  'https://drive.google.com/file/d/1iRRblyFrBurLoHFds3MI20CEA1S_YynA/view?usp=sharing',
  'https://drive.google.com/file/d/1j3vfsrv4kD3j6zsE4mZrjroYIYjytaSe/view?usp=sharing',
  'https://drive.google.com/file/d/1jQ29XA9EjsmeIQScdRUgceP191SJsuTG/view?usp=sharing',
  'https://drive.google.com/file/d/1k42D47qPcf-F3cBDTO4AioGWqs4Ma60Q/view?usp=sharing',
  'https://drive.google.com/file/d/1keysAaBhU8V-adzr-KPsm6w-fWpw0mmm/view?usp=sharing',
  'https://drive.google.com/file/d/1lO7OiaT4_Egm8dW6aUBZndfM-WJpY-tE/view?usp=sharing',
  'https://drive.google.com/file/d/1mDKosiLhihkVCH7kv2kwJ0V0uduUZctY/view?usp=sharing',
  'https://drive.google.com/file/d/1mXxEysyyW4xugqQLft58kisvZkESca9b/view?usp=sharing',
  'https://drive.google.com/file/d/1nVw7ia1aGKxIozR_FaDvYOhx0Jhs-xWr/view?usp=sharing',
  'https://drive.google.com/file/d/1nq7XmM3PVRcFuAz5SnDow8UY9iZ0Yg_V/view?usp=sharing',
  'https://drive.google.com/file/d/1oIWtm8nzcRabbo7PrmhCry6RHSbiEwpJ/view?usp=sharing',
  'https://drive.google.com/file/d/1o__BeJCxQR__n24ijxQSKQx15MU-Ijmb/view?usp=sharing',
  'https://drive.google.com/file/d/1pab0o_pfGZn547lyZp7RBo0-Xwr8gEiK/view?usp=sharing',
  'https://drive.google.com/file/d/1pfvF4H8ALmDzAH_5dVDR_2AcYYzye_t5/view?usp=sharing',
  'https://drive.google.com/file/d/1pr5u-tVNDe4RMAdE1MKJSdTyydqFK2cM/view?usp=sharing',
  'https://drive.google.com/file/d/1q0_G4PdxZwayD46NqFEPqSadm0Wmeui4/view?usp=sharing',
  'https://drive.google.com/file/d/1qeENEzqHASU733CR1rAfS7ijJ-lac07i/view?usp=sharing',
  'https://drive.google.com/file/d/1rKAPLIDTm2Zl-Wbj-iBwPZNRmOu9WqbF/view?usp=sharing',
  'https://drive.google.com/file/d/1s1Jteb9ZBzg7Wdx_12JS658sslSme776/view?usp=sharing',
  'https://drive.google.com/file/d/1sP6HbCOICRI6eP5f4zlv_uSroRyj91GQ/view?usp=sharing',
  'https://drive.google.com/file/d/1tQsE2ERrLLMUbx8X4fHbNxbs8K5WKicg/view?usp=sharing',
  'https://drive.google.com/file/d/1tecT2N9CggMB3NeWz15eKK5KyP3p5MGt/view?usp=sharing',
  'https://drive.google.com/file/d/1u-kkNGiQdSgbV0STsatSUXbKMRGRcLlz/view?usp=sharing',
  'https://drive.google.com/file/d/1uSdmADKymdmM7sf-HEPxJvz38KKBArqd/view?usp=sharing',
  'https://drive.google.com/file/d/1v6Hos4ZhrugiYD_VCaAL_WJJhlEvlLkr/view?usp=sharing',
  'https://drive.google.com/file/d/1vEb_hWANrwDoS6Pj-zS8K0btICIroZVg/view?usp=sharing',
  'https://drive.google.com/file/d/1vRcA5cJRRrVrt3NTwlHqqMD66YsMkPhj/view?usp=sharing',
  'https://drive.google.com/file/d/1vaibhscntV98Tn1xrbYWAE9AA5hex2mT/view?usp=sharing',
  'https://drive.google.com/file/d/1viJZoCh_qQjLFbLj_NVMcAKXoTOVGQAt/view?usp=sharing',
  'https://drive.google.com/file/d/1wWgLuwFuvHkbbKCl5TnqOx6YaTTtaBaR/view?usp=sharing',
  'https://drive.google.com/file/d/1xmf3QQa7I4IS4-ZuOaMzmKkak4H85Pj-/view?usp=sharing',
  'https://drive.google.com/file/d/1xy1lPj5S4PARl9CI-IssKU6OQ4J6A_Af/view?usp=sharing',
  'https://drive.google.com/file/d/1yWGab6tARjeTLQ78hvEBpIjkQbWKofsL/view?usp=sharing',
  'https://drive.google.com/file/d/1yX7J5bhxQgd1MG_Ph9JGHEAppJcovcWH/view?usp=sharing',
  'https://drive.google.com/file/d/1ykyitBj0CwSDkHJlQIH78s6OVkgNZzIO/view?usp=sharing',
  'https://drive.google.com/file/d/1z-WkRCVNzNzsCdpH_KpHpeVG5uITi0Mz/view?usp=sharing',
  'https://drive.google.com/file/d/1xWi-hKs1xAO3wcXPi9jiHey6i0Nh0BRj/view?usp=sharing',
  'https://drive.google.com/file/d/1-lCFsWhAlgf8bGtjtwmSdTqYDTWOXsMX/view?usp=sharing',
  'https://drive.google.com/file/d/103xC0DhfCr3Jzar1Q1gozllL3jaZmZAF/view?usp=sharing',
  'https://drive.google.com/file/d/104dJOBvyPN6wv6s-hs9Oa7xlkp9CMv0c/view?usp=sharing',
  'https://drive.google.com/file/d/10kcTviatswhvZLvlOgFf25amMNacyYqs/view?usp=sharing',
  'https://drive.google.com/file/d/10ljzp6dWkjmfjXgtYOtU7CrMI3znjqOB/view?usp=sharing',
  'https://drive.google.com/file/d/10qRLAxglT-K3wu7dDOZdI2clnDih4LqS/view?usp=sharing',
  'https://drive.google.com/file/d/10yhJBGfojomRN1YnSuSTdtGKC5T6IVLi/view?usp=sharing',
  'https://drive.google.com/file/d/11luzuElVnd_7FtkbPW3VGr28oQb5whq0/view?usp=sharing',
  'https://drive.google.com/file/d/11zpLH0UCtOzGixQ-v3c4yWPtxZc7lUN7/view?usp=sharing',
  'https://drive.google.com/file/d/12q_2l0cGsmSQacJ2TsvUaw6MlRyLdFyv/view?usp=sharing',
  'https://drive.google.com/file/d/13-4CXYYR78y0ybdnp0AyBJSH38AblsHr/view?usp=sharing',
  'https://drive.google.com/file/d/13k8YKxr0qrWqnX_Lh4keG_9ptGMW91mZ/view?usp=sharing',
  'https://drive.google.com/file/d/14BgY4AI8f-zXiYBse3bXEiPh8MjxoZ7G/view?usp=sharing',
  'https://drive.google.com/file/d/14cnqePUWAjdGSMmKQd48nTJG8QHg3lrA/view?usp=sharing',
  'https://drive.google.com/file/d/14rK_RsJPYEMCQUf-0f-UaeEO4VIizTVJ/view?usp=sharing',
  'https://drive.google.com/file/d/14uozZJchePSC0VylOFpy4VFCf_pqOo2C/view?usp=sharing',
  'https://drive.google.com/file/d/15gB3c6M6cy6P2pUvWSioPgjxawS9uYFx/view?usp=sharing',
  'https://drive.google.com/file/d/16ERTJ3YljUWoOsP376thZl2EbrGCJFsF/view?usp=sharing',
  'https://drive.google.com/file/d/16N0xnRmIfb3QPRSBc-1OperQoBUkUtLK/view?usp=sharing',
  'https://drive.google.com/file/d/16QptYmKutMhPfTvvodwK23OiGwkKlK75/view?usp=sharing',
  'https://drive.google.com/file/d/16hrX05e0erHITFo-sVASoMNuSKY_NAUI/view?usp=sharing',
  'https://drive.google.com/file/d/175WMK6KGY-3HsriUNHpWNpLmtiWNAboh/view?usp=sharing',
  'https://drive.google.com/file/d/17zseRp36UcgMx7cDnkvjADijB8S8UOTr/view?usp=sharing',
  'https://drive.google.com/file/d/18Rb8pTaJ2txra9etUOyJXCXVv3pprV9u/view?usp=sharing',
  'https://drive.google.com/file/d/19_cnnk_VEbNvAW6HQ1wVb_57iR6eHxMM/view?usp=sharing',
  'https://drive.google.com/file/d/19q3-UG9jl28UOPnf3RWCXfP74yej6-3t/view?usp=sharing',
  'https://drive.google.com/file/d/1AYAQfgic3Hk6FAEDw1ZlUCEtGvG_5Y5B/view?usp=sharing',
  'https://drive.google.com/file/d/1AtJFvP6DDzBSFbhp6p33q1WXMYD7JusO/view?usp=sharing',
  'https://drive.google.com/file/d/1AuKOwDNcBbV3k9fq_PUC4LSbgVwEHMrX/view?usp=sharing',
  'https://drive.google.com/file/d/1B29xmHYXiwv9pW0rsgrDd9sK8pZ1LP1Z/view?usp=sharing',
  'https://drive.google.com/file/d/1BAIO2vXBimDNKTMcUu9XH0RfhRi6kihK/view?usp=sharing',
  'https://drive.google.com/file/d/1BVqbgRq74VNGhCJW-n9ONgOVv2VHbDEG/view?usp=sharing',
  'https://drive.google.com/file/d/1Bk4q8ynZmKRYOH3yx4EY7b2Bj2gZhI41/view?usp=sharing',
  'https://drive.google.com/file/d/1C7t2-6Zrrk-1xWwazuO22U8AMTl0FqtB/view?usp=sharing',
  'https://drive.google.com/file/d/1C9TMQz-vEt0AnSXpCUsaU2_3vMggIAIk/view?usp=sharing',
  'https://drive.google.com/file/d/1D8M8fZKmEFd9UvqpMvPqwR0GfkcKzbnz/view?usp=sharing',
  'https://drive.google.com/file/d/1DCQjkT2J-zEm1Shch8-5O6t08NxkxE8d/view?usp=sharing',
  'https://drive.google.com/file/d/1DDYXNh1dkcWj2F66T1qrIsquD02-lyUu/view?usp=sharing',
  'https://drive.google.com/file/d/1DpjvNDtU8J0x8AaMfxz0_JWQsKp-f_4o/view?usp=sharing',
  'https://drive.google.com/file/d/1F6GPpQ-ro75M4k1HhfOlneEl-eN8wyIJ/view?usp=sharing',
  'https://drive.google.com/file/d/1FJg2_uAA2SHTbyLBqZL02J6LseMUCEdQ/view?usp=sharing',
  'https://drive.google.com/file/d/1FhsQt0Tyf2z3OrViU2NBhXjavwlCNHcQ/view?usp=sharing',
  'https://drive.google.com/file/d/1FrTisYmapOGNYUgkLJaXNFVpUY1eAoaF/view?usp=sharing',
  'https://drive.google.com/file/d/1GTrmxlcFx1De8So7dRGiT-un06IFfehQ/view?usp=sharing',
  'https://drive.google.com/file/d/1GV8ToUgx1qfpZf13Xc8VRAIjnVU4mYyq/view?usp=sharing',
  'https://drive.google.com/file/d/1GjqRf-TtrODlRB5zd3cOYJviPLDO6XMt/view?usp=sharing',
  'https://drive.google.com/file/d/1GlcFvlMjJnYTWgQ--6-yLEGAvhbW40KX/view?usp=sharing',
  'https://drive.google.com/file/d/1GnADuY5fpjoNd6UNXj_ogTD87n4Jf8HB/view?usp=sharing',
  'https://drive.google.com/file/d/1HN_8M-GJSs35fKrZju-4jmMJ7QUIZst6/view?usp=sharing',
  'https://drive.google.com/file/d/1IRpHDZGXP4rIgQnDqdUTCB4G9P19LBY6/view?usp=sharing',
  'https://drive.google.com/file/d/1Iej6iunneGip7lknOsIJipjAfzZvcUtu/view?usp=sharing',
  'https://drive.google.com/file/d/1J1HUs4PmjY7ogfsZIJQiEdJlagsjSv_-/view?usp=sharing',
  'https://drive.google.com/file/d/1J49bcB4_-4zwfyjNw1o5SNB9te3Oh5S4/view?usp=sharing',
  'https://drive.google.com/file/d/1JCsndvB6XLIRrdEY1TRZrPYgmtYzeYL2/view?usp=sharing',
  'https://drive.google.com/file/d/1JrPEX-c-siFDN0EbrJZVPL5TTavWPAgE/view?usp=sharing',
  'https://drive.google.com/file/d/1Jrm3hDLoWqAxLwo2vZQwpq-fxx_udApy/view?usp=sharing',
  'https://drive.google.com/file/d/1Jz5wh2pLW5RsYyv-mP80tdLSrS-LNozE/view?usp=sharing',
  'https://drive.google.com/file/d/1K0RuOqVHxrOd_pYybRFGwNu2R_JhbLBe/view?usp=sharing',
  'https://drive.google.com/file/d/1LRHGR2V8UDmbCuC6FOjxV4LnJdDlrCzv/view?usp=sharing',
  'https://drive.google.com/file/d/1L_-1pY_kFG3dQxhm7FdMeon42TE2E3qS/view?usp=sharing',
  'https://drive.google.com/file/d/1MAN7N9sl7X24yKolQbG-kpvkkSEzxtJ9/view?usp=sharing',
  'https://drive.google.com/file/d/1MKtEioiZ47rwxojXB5tXB8I6ONyEN1Ht/view?usp=sharing',
  'https://drive.google.com/file/d/1Mgo_e4FdprDNXmb7d7Cpi1-Ir_CCiqN4/view?usp=sharing',
  'https://drive.google.com/file/d/1N2g4XQZGjpjYgmzjkjfwx-_-XRYLcFkq/view?usp=sharing',
  'https://drive.google.com/file/d/1NM_NAXcEYOpziJRbABI8AKnPgUrnaIuk/view?usp=sharing',
  'https://drive.google.com/file/d/1NxFst159t7oI41N_bxtY4Kwv_feOVedm/view?usp=sharing',
  'https://drive.google.com/file/d/1O25fXK4Y8CsVDXaFMi5QvPFuZG7VNQe8/view?usp=sharing',
  'https://drive.google.com/file/d/1Oa-yOCQZ8niYMHwynIo5ryuNYdeq1atw/view?usp=sharing',
  'https://drive.google.com/file/d/1ObxBoCBCtF9VLkA6a6x_u48Fv2r1Hut0/view?usp=sharing',
  'https://drive.google.com/file/d/1P0xVP4zNdUJEA7iWhzvCLhEVs-q1ImDO/view?usp=sharing',
  'https://drive.google.com/file/d/1PUmKBPsE4laeJpjwnUcypWM4pDyxoaXB/view?usp=sharing',
  'https://drive.google.com/file/d/1QIrJTtoZLsNOAC124L_YjREh1njPpZ-v/view?usp=sharing',
  'https://drive.google.com/file/d/1Qela5uqt35ubzBT8Hkr8mlOiDk_EHmGM/view?usp=sharing',
  'https://drive.google.com/file/d/1QimFU9mnwSJTvm_Hky_ajhA2GZOe-6P6/view?usp=sharing',
  'https://drive.google.com/file/d/1R-enYcpxaM7XEH9OORpDpB6QfSuqWcJs/view?usp=sharing',
  'https://drive.google.com/file/d/1RAYjupcWF8BsYyZ1hAe8sXm_C7FL78b7/view?usp=sharing',
  'https://drive.google.com/file/d/1RGlt5TC_vYqrM4U2sVVePRbSJWg9xBvL/view?usp=sharing',
  'https://drive.google.com/file/d/1RQIch4FI1AoF4S7m4Xl5txo36DqNoXLr/view?usp=sharing',
  'https://drive.google.com/file/d/1RZWi5Os7oNz9vjGJLf1vJmERILwrszX-/view?usp=sharing',
  'https://drive.google.com/file/d/1Rcj4uCORgql47YHkw0qzNlgKZQIHh19u/view?usp=sharing',
  'https://drive.google.com/file/d/1RvSxOaGqcsh4y7AlZqR8ju1pXQTEnGBK/view?usp=sharing',
  'https://drive.google.com/file/d/1S2ErzgX7Okzs6wcllrVy6EPQ1qUnjQ7Z/view?usp=sharing',
  'https://drive.google.com/file/d/1S7Po4RMP0F9NN9VDSJeI1d-IkwnAVvJ_/view?usp=sharing',
  'https://drive.google.com/file/d/1StMvKc98g6PeXINZ3SiF_fgNYzFyYiyu/view?usp=sharing',
  'https://drive.google.com/file/d/1TBFQ_Nvu5zoAVrYDwCcENUZpMK2J43ZW/view?usp=sharing',
  'https://drive.google.com/file/d/1TYCBObHjdEAjLEEElid4hxJB-JFlekB8/view?usp=sharing',
  'https://drive.google.com/file/d/1TdJ8E5YyA4ko1zO6B8o3HAmZ-_TydJr0/view?usp=sharing',
  'https://drive.google.com/file/d/1ThPAJkhL_hwtdt8FmlYnBHbCvP6h3R72/view?usp=sharing',
  'https://drive.google.com/file/d/1UNCO0qoF4eMwMgFKrJuZNkK9zHiGSGEz/view?usp=sharing',
  'https://drive.google.com/file/d/1UadbECOOWQZOvBzSG4gHnxUAAAbFYVkh/view?usp=sharing',
  'https://drive.google.com/file/d/1V0o16XlF2B1TYWsUiCAzi2tcltWO1-S5/view?usp=sharing',
  'https://drive.google.com/file/d/1VwCF4dUlNDEFGacbssjlAm8qf69aYgCY/view?usp=sharing',
  'https://drive.google.com/file/d/1VzSvGaCX0kbp6VmSP_WKszWXKeyO80kQ/view?usp=sharing',
  'https://drive.google.com/file/d/1W-CdJLbrBOnCArapuUhBPvEqhyeW2qMx/view?usp=sharing',
  'https://drive.google.com/file/d/1WEugIoJ1PZR8qDXP6Ls1RGNS3SQWRafZ/view?usp=sharing',
  'https://drive.google.com/file/d/1WSnja00QPIU_jwHqDsi6gxi5T1VkDI7Z/view?usp=sharing',
  'https://drive.google.com/file/d/1X-XciG_O1WolezRI-u2CQ1poshlVsRwH/view?usp=sharing',
  'https://drive.google.com/file/d/1X8DVVNdwK8MQWzo0b_hKkzKiZ28EVBpA/view?usp=sharing',
  'https://drive.google.com/file/d/1XVyY0GDMF0k0xoKpx4YqliAxNjkGyWw-/view?usp=sharing',
  'https://drive.google.com/file/d/1XZxt_9wlBtI9-2Txb7vkr-7Ruqt-a4Z-/view?usp=sharing',
  'https://drive.google.com/file/d/1XlLB8V_0wuE1wjaVMrO8rMsjwUc1Mjkm/view?usp=sharing',
  'https://drive.google.com/file/d/1XpzMfOhv6aVRtmECNtp_BGuH_6tIybml/view?usp=sharing',
  'https://drive.google.com/file/d/1Y7XajabGjC3-VmszlqwnI4XCQddn4mIF/view?usp=sharing',
  'https://drive.google.com/file/d/1YLZlE0spmesFSSXIwpS34BLbKPJmWMPI/view?usp=sharing',
  'https://drive.google.com/file/d/1YTI2ynDNgCIdr8gpIfCCFFCr_p8yyxXg/view?usp=sharing',
  'https://drive.google.com/file/d/1YdLyvLKs43kgfZCGkk4kj-oDjPiSeVCx/view?usp=sharing',
  'https://drive.google.com/file/d/1YsgYFsBciFSOdU6-OwjEpRKyN0rukheT/view?usp=sharing',
  'https://drive.google.com/file/d/1ZNQNtIuPTJvC-j-Sv22hWZRHOh4gRckV/view?usp=sharing',
  'https://drive.google.com/file/d/1ZP9RLcHThp3hh1pu_U2oVq1fz5YFv476/view?usp=sharing',
  'https://drive.google.com/file/d/1Zmc_6yGAjskEPT5Idn_PCQFp5gbSUp7k/view?usp=sharing',
  'https://drive.google.com/file/d/1Zpv2T8luRTlJlb0sIp0AKDcjCjmsK12H/view?usp=sharing',
  'https://drive.google.com/file/d/1Zqr3P_W3lGbiBK4J3RTg44aRLZdieoct/view?usp=sharing',
  'https://drive.google.com/file/d/1ZzjzygUL66B1TeVNytQ7aXEBAAOWWp0C/view?usp=sharing',
  'https://drive.google.com/file/d/1_9wa-w9mvXDGGZQUHpbfN9v-iOpGwxHW/view?usp=sharing',
  'https://drive.google.com/file/d/1_bbA0pJ9szmqB88geUqtc_tjjEsZFLAI/view?usp=sharing',
  'https://drive.google.com/file/d/1aMzoIEZPI-AP2L18Jlqhi-JizRssWe3Y/view?usp=sharing',
  'https://drive.google.com/file/d/1aPqeQxZIR-qVFGllVybPIAosGY7rI6y4/view?usp=sharing',
  'https://drive.google.com/file/d/1asG6nymXM31CTOdX2Q4WcK0C5M-SjCan/view?usp=sharing',
  'https://drive.google.com/file/d/1ayPLHJGspe9pKKnGG2zQ8qAxTWEAKUmZ/view?usp=sharing',
  'https://drive.google.com/file/d/1bYHxOYfHBX-xMCS6i2fcCXEtNxPcSZwT/view?usp=sharing',
  'https://drive.google.com/file/d/1bcyJUMq48DZ0gJRlF0-XOlvq1jnYYe9m/view?usp=sharing',
  'https://drive.google.com/file/d/1bdBHHGfYWWnUXv9QODNeC9nCDZc9fy-d/view?usp=sharing',
  'https://drive.google.com/file/d/1bs7aMUAceZ14SVmRqoe22uQZ7QusM5Uw/view?usp=sharing',
  'https://drive.google.com/file/d/1c9ypQlA4j_dkYvT5Zd_VhHYoMrQAEemQ/view?usp=sharing',
  'https://drive.google.com/file/d/1cDWqbwd7_kT0r6VHyTvrOAtbULUc09Sy/view?usp=sharing',
  'https://drive.google.com/file/d/1cM65gvi-D_ZM9t2el2TebEtmUQSyssk4/view?usp=sharing',
  'https://drive.google.com/file/d/1cRg0jUPcRAEDlvN-daf_2jw8NUNOY6mh/view?usp=sharing',
  'https://drive.google.com/file/d/1ctyll6iQxGi7u0IdzOB_H2u9aWwaCu2r/view?usp=sharing',
  'https://drive.google.com/file/d/1czCkJ_mnAl5xpuaPbx87G0DatAsDpdrR/view?usp=sharing',
  'https://drive.google.com/file/d/1dBLcmwMUsu5KglbUOpgdPrF8bdEnR4vW/view?usp=sharing',
  'https://drive.google.com/file/d/1dGIGpFm5wPSXEHfOQT0ZFhS2Qf-5dLkK/view?usp=sharing',
  'https://drive.google.com/file/d/1dsFRQsXGYigN2oWUGblOtEfXzcmmgERO/view?usp=sharing',
  'https://drive.google.com/file/d/1fC1BcHrDV9nNtXN3-CiW0dxGCMqpuT9V/view?usp=sharing',
  'https://drive.google.com/file/d/1fC9ADy79KCY5fmvaqHB4NPyuGUe9yoOG/view?usp=sharing',
  'https://drive.google.com/file/d/1fZoNbwOHyJXkiQZMRMhhwXD17OQx1R-K/view?usp=sharing',
  'https://drive.google.com/file/d/1fra7hLZtNDaCykiBIR0o1dK0JvBhhh5y/view?usp=sharing',
  'https://drive.google.com/file/d/1ftN7SY8AWsLKRCh-glVipJhOuN9V8xOr/view?usp=sharing',
  'https://drive.google.com/file/d/1g_uko6ZWyWnnnTNPeZI51zbokebKJYYC/view?usp=sharing',
  'https://drive.google.com/file/d/1iA4wYjMwAo5GXkdeXqKZaj-bpzyBxrWQ/view?usp=sharing',
  'https://drive.google.com/file/d/1iKZawyPsh4ANq8A0BpCwY2j3XBaVJ9A1/view?usp=sharing',
  'https://drive.google.com/file/d/1ihi4Imx6ub_ATnUrTahL2ts_9_Xu4yhN/view?usp=sharing',
  'https://drive.google.com/file/d/1iuUiBXM8ybYyGn51RwpX7W2TcbiyFzwl/view?usp=sharing',
  'https://drive.google.com/file/d/1j30wsuAdLqa0i5VczWrdKulfSeTbkf1W/view?usp=sharing',
  'https://drive.google.com/file/d/1j3IuUxmeHt7uC60PKrIvUW_CIBo3hYus/view?usp=sharing',
  'https://drive.google.com/file/d/1jRQU4Oox71z0HXd20fvMI2YtIO3vj_ad/view?usp=sharing',
  'https://drive.google.com/file/d/1jkP4p9v3E__K2l8pc0sdyp8fmnjgPRDi/view?usp=sharing',
  'https://drive.google.com/file/d/1jpB8KLxpDF9TxtapERa49NLwZudnzmeN/view?usp=sharing',
  'https://drive.google.com/file/d/1kUmVBr-EeKRoULloWNAWEjB5oa4BKf9f/view?usp=sharing',
  'https://drive.google.com/file/d/1l68HjMpWKF3nGdDdQwJPtJFE5bq3FqMZ/view?usp=sharing',
  'https://drive.google.com/file/d/1lDWrVOKQNiEpQ1PClPVcWGsoExfecDKp/view?usp=sharing',
  'https://drive.google.com/file/d/1lTDpNWUkS-nYRs322LfZ8XERjZmYCbyh/view?usp=sharing',
  'https://drive.google.com/file/d/1laZidz8pjaYEratwW7OO6aeSUBCgoG0A/view?usp=sharing',
  'https://drive.google.com/file/d/1mFAxvf-5GbAhVF3h9zkys_RNIbOWY8a4/view?usp=sharing',
  'https://drive.google.com/file/d/1n276zKkiFUs3Xw4_6lLyz71AC_HPg4Wa/view?usp=sharing',
  'https://drive.google.com/file/d/1nyIE8ZXBuIfGp_iySwMq1PPnlF9MrsVZ/view?usp=sharing',
  'https://drive.google.com/file/d/1o-nfxwyRfK-XaXlXSHu_bNJD3lxeHziQ/view?usp=sharing',
  'https://drive.google.com/file/d/1oFMQihB08h19uev1jML-vQgGVoCl5GY4/view?usp=sharing',
  'https://drive.google.com/file/d/1oOMQk7SZCRdQg5DCDQj6MLS12q4qpgEN/view?usp=sharing',
  'https://drive.google.com/file/d/1ocOVGNHlATCHuaAFPkFkKhB0F9i9r799/view?usp=sharing',
  'https://drive.google.com/file/d/1oo5z6JQuHJ18YxJ6BmfrQdUtrJpVOvXb/view?usp=sharing',
  'https://drive.google.com/file/d/1pglnr5GG96HagWqugxR6dRVWESQ5acp9/view?usp=sharing',
  'https://drive.google.com/file/d/1ppoe9bWx2UjTrx1kTeCjgXEcl5G6VSDZ/view?usp=sharing',
  'https://drive.google.com/file/d/1qShSW8e5xJKY5krl33It05orUMrnKu2h/view?usp=sharing',
  'https://drive.google.com/file/d/1qkyXLhIJoRAVEMJKbQU4i3fIXt1hFW5Z/view?usp=sharing',
  'https://drive.google.com/file/d/1raOwec77kOguY6fdexCXMqISTLFg8iat/view?usp=sharing',
  'https://drive.google.com/file/d/1tXV9tmLYxoJSgWRetDnlk5WLpH6OTpXa/view?usp=sharing',
  'https://drive.google.com/file/d/1u7z1xYPjc3JcYu3F7DHu6PNxpdMvFetZ/view?usp=sharing',
  'https://drive.google.com/file/d/1uY6vapwZq5joJZtx34Pmn3xN22SbdhZX/view?usp=sharing',
  'https://drive.google.com/file/d/1ujDb7xrECdtwncsAa4ahvOLLao9bSd52/view?usp=sharing',
  'https://drive.google.com/file/d/1ul_PpKgGcVThBmFYtRsY2jFwJn0tJR72/view?usp=sharing',
  'https://drive.google.com/file/d/1vc83RyeQ6v4Hj9jhklwWskZm0BcYRSXC/view?usp=sharing',
  'https://drive.google.com/file/d/1vqcwSXUALB04Qmpl2ZEq8M7fQ5cNAbnW/view?usp=sharing',
  'https://drive.google.com/file/d/1w0mZI88cLoMJwFmPFvG18Ex-Yi4wQjOE/view?usp=sharing',
  'https://drive.google.com/file/d/1w4Eb2MDFjOp5hILeDOF4KwwKP7z-WnQ2/view?usp=sharing',
  'https://drive.google.com/file/d/1wB-RKvpfU2PA6Nn3ONijzWT2TML-8SBx/view?usp=sharing',
  'https://drive.google.com/file/d/1wBBfi9uq2lVFqpPZ5EdDJXMNYZdlf-79/view?usp=sharing',
  'https://drive.google.com/file/d/1wIzh-ZFOLcQxN0Slej0z-tqdWZop7fz8/view?usp=sharing',
  'https://drive.google.com/file/d/1wJYMe-POVrVzQMRCIb2Qfl6Ionz8NEMk/view?usp=sharing',
  'https://drive.google.com/file/d/1wOqBy4H7OPKUUnX-1q0bWPWkEuD35XzM/view?usp=sharing',
  'https://drive.google.com/file/d/1wQifw_bZCb_FV8Aur1eVS978juOC1DGH/view?usp=sharing',
  'https://drive.google.com/file/d/1w_au_1dT8U6d3e2hRRV6zRPZSgg1P3MS/view?usp=sharing',
  'https://drive.google.com/file/d/1we5fAneEF4LmlbXMCSGtocDmvrL3Um0n/view?usp=sharing',
  'https://drive.google.com/file/d/1xX6oTpwyOQ1rZLPbMG8E3I-DIlFyetSY/view?usp=sharing',
  'https://drive.google.com/file/d/1xf19lRz2rgBYf9I5nYAu1Q9lQ-ZLxjjw/view?usp=sharing',
  'https://drive.google.com/file/d/1zkU-JVX_klfvlJH8FGhG6IuAa1mfmoyZ/view?usp=sharing',
  'https://drive.google.com/file/d/1zqE9eZ2Nq4rU4kAgEXK2ykKonK5AFcPn/view?usp=sharing',
  'https://drive.google.com/file/d/198dlwKPUWZImLp7to6IYmRpqnfEF1Mrv/view?usp=sharing',
  'https://drive.google.com/file/d/1B_LBHc7DvCXVaS-IodNazqE0OI6aVghU/view?usp=sharing',
  'https://drive.google.com/file/d/1DGE5OjWgl6WNcnq7qcRDHuKC_QDaL5Q1/view?usp=sharing',
  'https://drive.google.com/file/d/1LrT6_H7ds6OqizZeHQnzqaGVdCV3g-HT/view?usp=sharing',
  'https://drive.google.com/file/d/1NVfBSig0rH6ZXYX27wUlw0AkBNdPg7ZM/view?usp=sharing',
  'https://drive.google.com/file/d/1U4AyLhPim7JcPEXRRxCK7OLN3uOTPPxq/view?usp=sharing',
  'https://drive.google.com/file/d/1YR3D3XESbBRtDKUoPtX3IOhDP7DqSaDl/view?usp=sharing',
  'https://drive.google.com/file/d/1Yf8RkOf_rxP3AZMvTPfwAqiEPW5Vs8h4/view?usp=sharing',
  'https://drive.google.com/file/d/1ZXoSosZ97TeavaJjERx0bzZ8bt2PWzSh/view?usp=sharing',
  'https://drive.google.com/file/d/1eGlNkL3bCQIPUIw6HTiiO2AQ3pPbtpxR/view?usp=sharing',
  'https://drive.google.com/file/d/1eVJEwW0AnLx4E13dSlNV6oeQ9S1lCban/view?usp=sharing',
  'https://drive.google.com/file/d/1kV8zQpvZyZ-NcVZrKVOyCsLytcU4F3Zj/view?usp=sharing',
  'https://drive.google.com/file/d/1kZDjjbFCG7ibxjd9DlPoFRx25Z4FeuZN/view?usp=sharing',
  'https://drive.google.com/file/d/1kyrGoUBAUxqIFKMzqbqm8gRmw6WOw3RD/view?usp=sharing',
  'https://drive.google.com/file/d/1pPTuDG2ni5fTUIgsoxL3H6hrjgcRm-kn/view?usp=sharing',
  'https://drive.google.com/file/d/1ujqDYlm3oy1-vNHE0rEf5TgFM85_lT5z/view?usp=sharing',
  'https://drive.google.com/file/d/1vBM7SlOnpWy9Hj8lZ8lunZce50cpESQg/view?usp=sharing',
  'https://drive.google.com/file/d/1wtYOnFkd28MjcDHmAs5jyRZZTBQJyy9b/view?usp=sharing',
  'https://drive.google.com/file/d/1-qhZ6AalHPqi-URVbPjCjEitqKDlfsdH/view?usp=sharing',
  'https://drive.google.com/file/d/11DgVP3zQKKedzagbcS_ucwWEKphqKkp1/view?usp=sharing',
  'https://drive.google.com/file/d/12o5pPPPSd-Kqs-lDAi0AMNkkRsJlQPHT/view?usp=sharing',
  'https://drive.google.com/file/d/13JySYx4kraPsZnhqFoV8kr2jWYtW6eZk/view?usp=sharing',
  'https://drive.google.com/file/d/13qxyExQIuBFPEXvEqV0FdtkVlHSiZTr5/view?usp=sharing',
  'https://drive.google.com/file/d/14C5QRAd7vhUx970ask74OtG7dPGtS6gl/view?usp=sharing',
  'https://drive.google.com/file/d/14o01hKI8vGmzWif3RjLpEnyC8l0yVRBX/view?usp=sharing',
  'https://drive.google.com/file/d/16V6G02tH-Brc4P031eU_wBrnzUgG_WGm/view?usp=sharing',
  'https://drive.google.com/file/d/18IX0efPDTLaE2XcsEPo4aUr83sGBc9bZ/view?usp=sharing',
  'https://drive.google.com/file/d/18mihQBUG5TzDKHjjBwA1a0vSBWUTxvk3/view?usp=sharing',
  'https://drive.google.com/file/d/19jEq87zyVSEsj2PFbH7IRjEnFb6Ai5Qo/view?usp=sharing',
  'https://drive.google.com/file/d/19v0-mz7-QFhiJABILLtSzjLd_sjzf3Qt/view?usp=sharing',
  'https://drive.google.com/file/d/1A4PZLKY4A90gfJzBxinfTqEVjS_sFqVd/view?usp=sharing',
  'https://drive.google.com/file/d/1AElZeCczm405os4EqkW131UG3oK6JS9R/view?usp=sharing',
  'https://drive.google.com/file/d/1ArKOhLb50kRBS3mxQOrceRqCHNlSbeQN/view?usp=sharing',
  'https://drive.google.com/file/d/1EB7AG--91AJM1FugEtEGItFwyfBtn2E_/view?usp=sharing',
  'https://drive.google.com/file/d/1FwPP4q03wpoFVhKrJ8gzIQD8vjgnEFFK/view?usp=sharing',
  'https://drive.google.com/file/d/1GXLHEg19arneX6L7FX3vD5FasuBAh29o/view?usp=sharing',
  'https://drive.google.com/file/d/1HxSKNoTVvh4VYwv_EbM6gZE-ugfCRq53/view?usp=sharing',
  'https://drive.google.com/file/d/1I-QtT75UNwwydQsDce78o1b86FDOTHvZ/view?usp=sharing',
  'https://drive.google.com/file/d/1JdV2qVLAlblyThbkFiJ9eg9thSIosR4p/view?usp=sharing',
  'https://drive.google.com/file/d/1JhlWnIZTBC9Gq75x_ir4nxX5qlOBLBN4/view?usp=sharing',
  'https://drive.google.com/file/d/1K_d1rGPT8OUAqJQw6kU6id2O0pAhAkTh/view?usp=sharing',
  'https://drive.google.com/file/d/1M218bY-DI7AdjEiLoll3vbqsmsx65UNv/view?usp=sharing',
  'https://drive.google.com/file/d/1M8-DUmhAX-Xz_-dnS2EpL6DalpLd32vG/view?usp=sharing',
  'https://drive.google.com/file/d/1ODRVsvFOvm_NFsTYlVoY1AdQwDIbPtCM/view?usp=sharing',
  'https://drive.google.com/file/d/1PUnaCFdfeEJHjCeEsiRIWs-9j9MtNrca/view?usp=sharing',
  'https://drive.google.com/file/d/1SZ3OAv_HZtjAvGpLMjmmtQBlvDVHTU8-/view?usp=sharing',
  'https://drive.google.com/file/d/1V_VQnsquW5YbS1SdBxx-oWhmHpaXpcfQ/view?usp=sharing',
  'https://drive.google.com/file/d/1ZEWNRvAUfSSro3QpuPm1LPX3CQVKnPkG/view?usp=sharing',
  'https://drive.google.com/file/d/1Zyff1-TMd2d81BDdkPYdVx669ZJNydy2/view?usp=sharing',
  'https://drive.google.com/file/d/1cQVmwK9Q2CNqmuTtOzbLmxNjdCRZX94s/view?usp=sharing',
  'https://drive.google.com/file/d/1cXzvsatN3oVVjkOwtsdw_WbjcaKFhjGy/view?usp=sharing',
  'https://drive.google.com/file/d/1di2y_N-BmtDRYG-_cwPLSQvOA3QYSzZ5/view?usp=sharing',
  'https://drive.google.com/file/d/1dntKOMJWQcODVxLBpHQnJAhXCnPbshbO/view?usp=sharing',
  'https://drive.google.com/file/d/1eTTRRvLbU7scT8vwJ_VSpaTDuxm3-Fmx/view?usp=sharing',
  'https://drive.google.com/file/d/1eV39uU-j2av_Y7CLrJfHm24hZEP-jnlI/view?usp=sharing',
  'https://drive.google.com/file/d/1f790BOVMXqVVTznn8HGpnfKx49ArlrIl/view?usp=sharing',
  'https://drive.google.com/file/d/1gI9vRAdfhDlqpCmOsg0u17u1nrghNSjr/view?usp=sharing',
  'https://drive.google.com/file/d/1gTkHYaQohD4gT4j0DGukgeoodrZA2566/view?usp=sharing',
  'https://drive.google.com/file/d/1hT53CpPWkLPeBbVQsIrnDqG6nkycLW0K/view?usp=sharing',
  'https://drive.google.com/file/d/1hilomXZIhkObpYS4fn_LAZUQUFjF-7H3/view?usp=sharing',
  'https://drive.google.com/file/d/1jMWu3VhplcRY9BL8M5n0C86AlXFiJvND/view?usp=sharing',
  'https://drive.google.com/file/d/1je0zvygZxCgGZeLsPgMfWjH-lLoknEm9/view?usp=sharing',
  'https://drive.google.com/file/d/1kpfn85E2LhWy5WH9LvvS8Jp0nUU8Zoat/view?usp=sharing',
  'https://drive.google.com/file/d/1ncYCiDPD1qcSn1Jflr2VDVa6TF21Rhc3/view?usp=sharing',
  'https://drive.google.com/file/d/1nj8twrv1J42YQwlhUYX3rceHwRZVK1op/view?usp=sharing',
  'https://drive.google.com/file/d/1oP-hxTWM7JjLiUZgW8M0J635Arpovo8u/view?usp=sharing',
  'https://drive.google.com/file/d/1pvV0mptU-JVTftOK8zLi-lRqXvm0hqWU/view?usp=sharing',
  'https://drive.google.com/file/d/1qp_M2xz9FcmgRTL9LpgPTHZc5jlSHgcn/view?usp=sharing',
  'https://drive.google.com/file/d/1sLBR4836pDDGDpQr1CHX_INf1nQyvf5F/view?usp=sharing',
  'https://drive.google.com/file/d/1sukonm3fcrLfjbEPT9Z9gmXFBRnUsK_i/view?usp=sharing',
  'https://drive.google.com/file/d/1sywzp1rusllnSZ2lnNzQBBWWGrZ7QsdJ/view?usp=sharing',
  'https://drive.google.com/file/d/1tH0eX2sZsTfRW2G-QRr-RHKz0yjh2mvx/view?usp=sharing',
  'https://drive.google.com/file/d/1u1Vp0LwH7oUUyy2mJ3WoyIJy3Jd8815_/view?usp=sharing',
  'https://drive.google.com/file/d/1vI1LwGqwzQjIQQfEAneboNPTOoKcWuOk/view?usp=sharing',
  'https://drive.google.com/file/d/1vloLF2Vdnz2UuyzKkqSLvbRkHG66w0JD/view?usp=sharing',
  'https://drive.google.com/file/d/1vs2bOHQURECFYwUNvPh9JDfDezUqkCIX/view?usp=sharing',
  'https://drive.google.com/file/d/1wcMzYUyE0RYOkQAmCUaq04D5SBIKwFpY/view?usp=sharing',
  'https://drive.google.com/file/d/1wnL0yo6vyDSrqiEPjq4r56rdTemzH2Iz/view?usp=sharing',
];

export interface EducationImageItem {
  id: string;
  driveId: string;
  url: string;
  fallbackUrl: string;
  originalUrl: string;
  titleEn: string;
  titleHi: string;
  category: 'Care Point Classes' | 'Educational Seminar' | 'Community Movement' | 'General Education';
}

/**
 * Extract Google Drive File ID from various link formats
 */
export function extractDriveFileId(url: string): string | null {
  if (!url) return null;
  
  if (url.includes('/file/d/')) {
    const parts = url.split('/file/d/');
    if (parts[1]) return parts[1].split('/')[0].split('?')[0];
  }
  
  if (url.includes('id=')) {
    try {
      const u = new URL(url);
      const id = u.searchParams.get('id');
      if (id) return id;
    } catch {
      // ignore regex fallback below
    }
  }

  const match = url.match(/[-\w]{25,}/);
  return match ? match[0] : null;
}

/**
 * Build deduplicated, structured education gallery items
 */
function buildCentralizedEducationLibrary(rawUrls: string[]): EducationImageItem[] {
  const seenDriveIds = new Set<string>();
  const items: EducationImageItem[] = [];

  rawUrls.forEach((rawUrl, index) => {
    const driveId = extractDriveFileId(rawUrl);
    if (!driveId || seenDriveIds.has(driveId)) {
      return; // Deduplicate automatically
    }

    seenDriveIds.add(driveId);

    const directUrl = `https://lh3.googleusercontent.com/d/${driveId}=s2000`;
    const fallbackUrl = `https://drive.google.com/uc?export=view&id=${driveId}`;

    let category: EducationImageItem['category'] = 'Care Point Classes';
    if (index % 4 === 1) category = 'Educational Seminar';
    else if (index % 4 === 2) category = 'Community Movement';
    else if (index % 4 === 3) category = 'General Education';

    items.push({
      id: `edu_img_${driveId}`,
      driveId,
      url: directUrl,
      fallbackUrl,
      originalUrl: rawUrl,
      titleEn: `Care Point Educational Gallery Asset #${items.length + 1}`,
      titleHi: `केयर पॉइंट शैक्षणिक गैलरी चित्र #${items.length + 1}`,
      category,
    });
  });

  return items;
}

// Single centralized data source export
export const educationGalleryImages: EducationImageItem[] = buildCentralizedEducationLibrary(RAW_EDUCATION_IMAGE_URLS);

// Pure list of deduplicated direct URLs for components expecting string[]
export const educationGalleryUrls: string[] = educationGalleryImages.map(img => img.url);

/**
 * Pre-validation cache key
 */
const VALIDATION_CACHE_KEY = 'rangrez_edu_img_validation_cache_v1';

type ImageValidationStatus = 'valid' | 'broken' | 'pending';

/**
 * Get cached image status from sessionStorage / memory
 */
function getCachedStatusMap(): Record<string, ImageValidationStatus> {
  if (typeof window === 'undefined') return {};
  try {
    const cached = sessionStorage.getItem(VALIDATION_CACHE_KEY);
    return cached ? JSON.parse(cached) : {};
  } catch {
    return {};
  }
}

/**
 * Save image validation status to sessionStorage
 */
function setCachedStatus(url: string, status: ImageValidationStatus) {
  if (typeof window === 'undefined') return;
  try {
    const current = getCachedStatusMap();
    current[url] = status;
    sessionStorage.setItem(VALIDATION_CACHE_KEY, JSON.stringify(current));
  } catch {
    // Ignore storage quota limits
  }
}

/**
 * Test image load asynchronously with timeout
 */
export function validateImage(url: string, timeoutMs: number = 8000): Promise<boolean> {
  return new Promise((resolve) => {
    const cached = getCachedStatusMap()[url];
    if (cached === 'valid') return resolve(true);
    if (cached === 'broken') return resolve(false);

    const img = new Image();
    let isSettled = false;

    const timer = setTimeout(() => {
      if (!isSettled) {
        isSettled = true;
        img.src = '';
        setCachedStatus(url, 'broken');
        resolve(false);
      }
    }, timeoutMs);

    img.onload = () => {
      if (!isSettled) {
        isSettled = true;
        clearTimeout(timer);
        setCachedStatus(url, 'valid');
        resolve(true);
      }
    };

    img.onerror = () => {
      if (!isSettled) {
        isSettled = true;
        clearTimeout(timer);
        setCachedStatus(url, 'broken');
        resolve(false);
      }
    };

    const resolved = resolveDriveUrl(url) || url;
    img.src = resolved;
  });
}

/**
 * Filter an array of image items or URLs, retaining only valid ones.
 */
export async function filterValidImages<T extends { url: string } | string>(items: T[]): Promise<T[]> {
  const validationResults = await Promise.all(
    items.map(async (item) => {
      const url = typeof item === 'string' ? item : item.url;
      const isValid = await validateImage(url);
      return { item, isValid };
    })
  );

  return validationResults.filter(r => r.isValid).map(r => r.item);
}

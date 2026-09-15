# 隨拾句 1.0 — App Store Connect 填寫內容

更新日期：2026-09-15

## App record（建立 App 時）

- Platforms: iOS
- Name: 隨拾句－文字剪藏與靈感筆記
- Primary Language: Traditional Chinese
- Bundle ID: `com.clusterbox.app`
- SKU: `QUOTE-HOARDER-IOS-001`
- User Access: Full Access（若團隊沒有權限分流需求）

SKU 建立後不能修改；若團隊已有 SKU 命名慣例，建立 App 記錄前先替換。

## App Information

- Name（繁中）: 隨拾句－文字剪藏與靈感筆記
- Name（English）: Quote Hoarder
- Subtitle（繁中）: 保存摘錄來源，隨時搜尋找回
- Subtitle（English）: Save snippets with sources
- Primary Category: Productivity
- Secondary Category: Reference
- Content Rights: No（App 本身不提供或串流第三方內容；使用者自行保存內容）
- Age Rating: 所有內容頻率選 None；無 App 內網頁瀏覽、聊天、廣告、賭博、暴力、成人、醫療或受管制內容。預期分級為 4+，仍以 App Store Connect 計算結果為準。
- Copyright: 2026 Circle Studio

## iOS App Version 1.0 — 繁體中文

### Promotional Text

從 Safari、備忘錄與支援分享的 App 保存文字，保留來源、加上標籤與註解，之後快速搜尋找回。

### Description

隨拾句是一個專為 iPhone 設計的私人文字收藏盒。

看到值得留下的一句話時，從系統分享選單直接收錄；也能手動輸入、貼上剪貼簿內容，或從圖片辨識文字。隨拾句會保存可取得的來源名稱與原始網址，方便日後回到原文。

主要功能：

• 從支援 iOS 分享功能的 App 收錄文字與網址
• 手動輸入、剪貼簿提醒與快捷指令
• 在裝置上辨識圖片中的文字
• 搜尋文字、註解、來源、網址與標籤
• 置頂、多選與批次加入標籤
• 編輯來源名稱與原始網址
• 複製正文，或連同來源一起分享
• JSON 備份匯出、合併匯入與刪除復原
• 深色模式、動態字級與減少動態效果支援

收藏內容保存在裝置上，不需建立帳號。隨拾句不含廣告、追蹤或第三方分析 SDK。

### Keywords

佳句,閱讀,標籤,剪貼簿,引用,素材庫,文章,書摘,語錄,寫作,備忘,圖片辨識

### URLs

- Support URL: `https://YOUR-DOMAIN/support/`
- Marketing URL（optional）: `https://YOUR-DOMAIN/`
- Privacy Policy URL: `https://YOUR-DOMAIN/privacy/`

## iOS App Version 1.0 — English

### Promotional Text

Save passages from Safari and other apps, preserve their sources, add tags and notes, and find them again in seconds.

### Description

Quote Hoarder is a private text collection for iPhone.

When you find a passage worth keeping, save it directly from the iOS share sheet. You can also type or paste text manually, use a Shortcut, or recognize text in an image. When available, Quote Hoarder preserves the source name and original URL so you can return to the full context later.

Key features:

• Capture text and links from apps that support iOS sharing
• Add text manually or through clipboard suggestions and Shortcuts
• Recognize text in images on your device
• Search text, notes, sources, URLs, and tags
• Pin clips, select multiple items, and add tags in batches
• Edit source names and original URLs
• Copy a passage or share it together with its source
• Export JSON backups, merge imports, and undo deletions
• Support for Dark Mode, Dynamic Type, and Reduce Motion

Your collection stays on your device. No account is required. Quote Hoarder contains no ads, tracking, or third-party analytics SDKs.

### Keywords

excerpt,note,highlight,reader,bookmark,writing,ideas,organize,clipboard,OCR

### URLs

- Support URL: `https://YOUR-DOMAIN/support/`
- Marketing URL (optional): `https://YOUR-DOMAIN/`
- Privacy Policy URL: `https://YOUR-DOMAIN/privacy/`

## Build information

- Version: `1.0`
- Build: `1`
- Minimum OS: iOS 16.0
- App Bundle ID: `com.clusterbox.app`
- Share Extension Bundle ID: `com.clusterbox.app.ShareExtension`
- Action Extension Bundle ID: `com.clusterbox.app.SaveAction`
- App Group: `group.com.clusterbox.app`

## App Privacy

- Privacy Policy URL: `https://YOUR-DOMAIN/privacy/`
- User Privacy Choices URL: 留白
- Data Collection: No, we do not collect data from this app
- Tracking: No

此答案成立的前提是送出的 binary 仍沒有廣告、分析、崩潰回報、第三方 SDK 或開發者後端。

## App Review Information

- Sign-in required: No
- Demo account: Not required
- Contact First Name: `[填寫]`
- Contact Last Name: `[填寫]`
- Contact Phone: `[填寫含國碼，例如 +886…]`
- Contact Email: `chiugastudio@gmail.com`

### Notes

This app does not require an account and has no paid features.

Suggested review flow:

1. Open Quote Hoarder and tap Capture in the bottom-right corner to add text manually.
2. In Safari, select a passage, tap Share, and choose Quote Hoarder Clip to review and save it.
3. Sharing a URL or image preserves available source information. Image text recognition runs on-device.
4. Return to the main app to search, edit, pin, tag, and export clips.
5. Save to Quote Hoarder (Action Extension) and the Save Text to Quote Hoarder App Shortcut provide additional capture methods.

Clips and settings are shared between the main app, Share Extension, and Action Extension through App Group `group.com.clusterbox.app`. The app does not send content to a developer server.

## Screenshots

Upload the five 1242 × 2688 PNG files from the app repository’s `docs/promo-images/app-store-connect-6.5-v8-final-polish` folder, in filename order. They contain no alpha channel and are accepted as 6.5-inch iPhone screenshots when 6.9-inch screenshots are not supplied.

App previews are optional; leave them empty for 1.0.

## Pricing and Availability

- Price: Free（建議；目前沒有付費功能或 IAP）
- Availability: All territories where legal and support obligations can be met
- Pre-order: No
- Release option: Manually release this version（建議第一版採人工控制）

## Export Compliance

- Uses non-exempt encryption: No
- 若 App Store Connect 仍詢問加密用途：App 不實作自有或非豁免加密；外部來源網址只交由系統瀏覽器開啟。

可在 App target 的 Info 設定加入 `ITSAppUsesNonExemptEncryption = NO`，避免每次上傳重複詢問。

## Advertising Identifier

- Uses Advertising Identifier (IDFA): No

## Additional account-level items

- Agreements, Tax, and Banking: 免費 App 仍需確認必要協議狀態可提交。
- EU Digital Services Act trader status: 這是開發者帳號層級的法律身分，需由帳號持有人依實際商業狀態選擇，不能由程式碼推定。
- Accessibility Nutrition Labels: 可先不主動宣告；完成實機 VoiceOver、Larger Text、Dark Interface、Sufficient Contrast 等驗證後再依實測填寫。
- App Store Server Notifications / Game Center / In-App Purchases: 不使用，留空。

## 送出前最後替換

1. 將 `YOUR-DOMAIN` 換成網站實際網域。
2. 填入 App Review 聯絡人姓名與國際格式電話。
3. 確認 App Store Connect 顯示的計算後年齡分級。
4. 確認正式上傳 build 的 App Privacy 報告沒有新增 SDK 或資料收集。
5. TestFlight 實機驗收後再選取 build 1 並 Submit for Review。


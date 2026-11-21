# SNAPPER

بازارگاه اتصال مشتریان به عکاسان و فیلم‌برداران؛ نسخه اول اندروید.

## وضعیت
این مخزن شامل پایه اپلیکیشن Expo / React Native است. نسخه فعلی یک MVP قابل اجرا برای انتخاب نقش و مرور داشبوردهای اولیه است؛ اتصال واقعی به سرور، نقشه زنده، پرداخت و احراز هویت در مراحل بعدی اضافه می‌شوند.

## اجرا
- Node.js LTS
- `npm install`
- `npx expo start`

## ساخت APK
Workflow گیت‌هاب در مسیر `.github/workflows/android-apk.yml` با اجرای دستی یا push روی main، پروژه را با EAS Build برای Android آماده می‌کند. برای Build ابری EAS باید متغیر `EXPO_TOKEN` در GitHub Actions Secrets تنظیم شود.

## فناوری‌ها
- Expo + React Native + TypeScript
- Expo Router
- EAS Build

import React, { useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Role = "customer" | "photographer";
const photographers = [
  { name: "استودیو آرتا", kind: "پرتره و مراسم", price: "از ۹۰۰ هزار تومان", rating: "۴٫۹", distance: "۱٫۲ کیلومتر" },
  { name: "نگاه نو", kind: "محصول و تبلیغاتی", price: "از ۶۵۰ هزار تومان", rating: "۴٫۸", distance: "۲٫۴ کیلومتر" },
  { name: "فریم طلایی", kind: "مراسم و فضای باز", price: "از ۱٫۲ میلیون تومان", rating: "۵٫۰", distance: "۳٫۱ کیلومتر" }
];

export default function HomeScreen() {
  const [role, setRole] = useState<Role | null>(null);
  const later = (name: string) => Alert.alert("به‌زودی", name + " در مرحله بعد به سرویس واقعی متصل می‌شود.");
  return (
    <SafeAreaView style={s.safe}>
      <ScrollView contentContainerStyle={s.page} showsVerticalScrollIndicator={false}>
        <View style={s.header}>
          <View style={s.logo}><Text style={s.logoText}>S</Text></View>
          <View style={{ flex: 1 }}><Text style={s.brand}>SNAPPER</Text><Text style={s.tagline}>لحظه‌ها، حرفه‌ای ثبت می‌شوند</Text></View>
          <Pressable style={s.city} onPress={() => later("انتخاب شهر")}><Text style={s.cityText}>⌖ بیرجند</Text></Pressable>
        </View>
        {!role ? <View>
          <View style={s.hero}>
            <Text style={s.eyebrow}>یک قاب تا تجربه‌ای تازه</Text>
            <Text style={s.heroTitle}>برای ثبت لحظه‌ها{"\n"}آماده‌ای؟</Text>
            <Text style={s.heroSub}>به جامعه مشتریان و عکاسان اسنپر بپیوند.</Text>
            <View style={s.orb}><Text style={s.orbText}>✦</Text></View>
          </View>
          <Text style={s.section}>چطور می‌خواهی وارد شوی؟</Text>
          <Pressable style={s.roleCard} onPress={() => setRole("customer")}>
            <View style={s.roleIcon}><Text style={s.iconText}>⌕</Text></View>
            <View style={s.roleCopy}><Text style={s.roleTitle}>می‌خواهم عکاس پیدا کنم</Text><Text style={s.roleDesc}>نمونه‌کارها را ببین، قیمت بگیر و رزرو کن.</Text></View>
            <Text style={s.arrow}>‹</Text>
          </Pressable>
          <Pressable style={s.roleCard} onPress={() => setRole("photographer")}>
            <View style={[s.roleIcon, { backgroundColor: "#E7F7F1" }]}><Text style={[s.iconText, { color: "#179B72" }]}>✧</Text></View>
            <View style={s.roleCopy}><Text style={s.roleTitle}>من عکاس / فیلم‌بردارم</Text><Text style={s.roleDesc}>پروژه بگیر و پیشنهاد قیمت بفرست.</Text></View>
            <Text style={s.arrow}>‹</Text>
          </Pressable>
          <Text style={s.foot}>با ادامه، شرایط استفاده و حریم خصوصی اسنپر را می‌پذیرید.</Text>
        </View> : <View>
          <View style={s.welcome}><View><Text style={s.eyebrow}>{role === "customer" ? "جست‌وجوی هوشمند" : "فضای کاری شما"}</Text><Text style={s.pageTitle}>{role === "customer" ? "عکاس‌های اطراف شما" : "پنل عکاس"}</Text><Text style={s.muted}>امروز چه چیزی ثبت می‌کنیم؟</Text></View><View style={s.avatar}><Text style={s.avatarText}>{role === "customer" ? "م" : "ع"}</Text></View></View>
          {role === "customer" ? <View>
            <View style={s.callout}><Text style={s.calloutTitle}>عکاس مناسب را پیدا کن</Text><Text style={s.calloutDesc}>اطراف خودت را بگرد یا درخواستت را برای چند عکاس بفرست.</Text><Pressable style={s.button} onPress={() => later("ثبت درخواست عکاسی")}><Text style={s.buttonText}>ثبت درخواست عکاسی  ←</Text></Pressable></View>
            <View style={s.sectionRow}><Text style={s.section}>عکاسان نزدیک شما</Text><Pressable onPress={() => later("نمایش نقشه")}><Text style={s.link}>نمایش نقشه</Text></Pressable></View>
            <Pressable style={s.map} onPress={() => later("نقشه زنده عکاسان")}><View style={[s.pin, { top: 30, left: "22%" }]} /><View style={[s.pin, { top: 83, left: "57%" }]} /><View style={[s.pin, { top: 22, left: "78%" }]} /><Text style={s.mapCaption}>پیش‌نمایش نقشه • نقشه زنده در مرحله بعد</Text></Pressable>
            {photographers.map((p) => <Pressable key={p.name} style={s.person} onPress={() => later("پروفایل " + p.name)}><View style={s.personAvatar}><Text style={s.personAvatarText}>{p.name.slice(0, 1)}</Text></View><View style={s.personInfo}><Text style={s.personName}>{p.name}</Text><Text style={s.personKind}>{p.kind}</Text><Text style={s.personPrice}>{p.price}</Text><Text style={s.personDistance}>{p.distance}</Text></View><Text style={s.rating}>★ {p.rating}</Text></Pressable>)}
          </View> : <View>
            <View style={s.stats}><View style={s.stat}><Text style={s.statValue}>۰</Text><Text style={s.statLabel}>درخواست جدید</Text></View><View style={s.stat}><Text style={s.statValue}>۰</Text><Text style={s.statLabel}>پروژه فعال</Text></View><View style={s.stat}><Text style={s.statValue}>۰</Text><Text style={s.statLabel}>امتیاز</Text></View></View>
            <View style={s.callout}><Text style={s.calloutTitle}>فرصت‌های تازه منتظر تو هستند</Text><Text style={s.calloutDesc}>پروفایلت را تکمیل کن تا مشتری‌ها نمونه‌کارها و خدماتت را ببینند.</Text><Pressable style={s.button} onPress={() => later("تکمیل پروفایل عکاس")}><Text style={s.buttonText}>تکمیل پروفایل  ←</Text></Pressable></View>
            <Text style={s.section}>دسترسی سریع</Text>
            <View style={s.quickGrid}>{["درخواست‌های اطراف", "نمونه‌کارهای من", "خدمات و قیمت‌ها", "درآمد و تسویه"].map((x) => <Pressable key={x} style={s.quick} onPress={() => later(x)}><Text style={s.quickTitle}>{x}</Text><Text style={s.quickMark}>↗</Text></Pressable>)}</View>
          </View>}
          <Pressable style={s.switch} onPress={() => setRole(null)}><Text style={s.switchText}>بازگشت به انتخاب نقش</Text></Pressable>
        </View>}
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F7F8FC" }, page: { padding: 20, paddingBottom: 36 },
  header: { flexDirection: "row", alignItems: "center", gap: 11, marginBottom: 25 }, logo: { width: 43, height: 43, borderRadius: 15, backgroundColor: "#6658E8", alignItems: "center", justifyContent: "center" }, logoText: { color: "white", fontSize: 26, fontWeight: "900" }, brand: { color: "#191B30", fontSize: 18, fontWeight: "900", letterSpacing: 1.5 }, tagline: { color: "#969AAC", fontSize: 10 }, city: { backgroundColor: "white", borderRadius: 18, padding: 10, borderWidth: 1, borderColor: "#ECEEF5" }, cityText: { color: "#555A6C", fontSize: 11, fontWeight: "700" },
  hero: { backgroundColor: "#191B36", borderRadius: 27, padding: 24, minHeight: 215, overflow: "hidden", marginBottom: 27 }, eyebrow: { color: "#958BFF", fontSize: 12, fontWeight: "800", marginBottom: 9, textAlign: "right" }, heroTitle: { color: "white", fontSize: 30, lineHeight: 42, fontWeight: "900", textAlign: "right" }, heroSub: { color: "#C8C9D8", fontSize: 12, marginTop: 10, textAlign: "right" }, orb: { position: "absolute", left: -35, bottom: -55, width: 150, height: 150, borderRadius: 90, backgroundColor: "#6658E8", alignItems: "center", justifyContent: "center", opacity: 0.8 }, orbText: { color: "white", fontSize: 65 },
  section: { color: "#202337", fontSize: 16, fontWeight: "900", textAlign: "right", marginBottom: 13 }, roleCard: { backgroundColor: "white", borderRadius: 20, padding: 15, flexDirection: "row", alignItems: "center", marginBottom: 12, borderWidth: 1, borderColor: "#ECEEF5" }, roleIcon: { width: 48, height: 48, borderRadius: 16, backgroundColor: "#EFEDFF", alignItems: "center", justifyContent: "center" }, iconText: { color: "#6658E8", fontSize: 27 }, roleCopy: { flex: 1, marginHorizontal: 12 }, roleTitle: { color: "#202337", fontSize: 13, fontWeight: "900", textAlign: "right" }, roleDesc: { color: "#8D91A1", fontSize: 10, marginTop: 5, textAlign: "right" }, arrow: { color: "#A3A6B3", fontSize: 28 }, foot: { color: "#A4A7B4", fontSize: 9, textAlign: "center", marginTop: 15 },
  welcome: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 22 }, pageTitle: { color: "#202337", fontSize: 21, fontWeight: "900", textAlign: "right" }, muted: { color: "#9296A6", fontSize: 11, textAlign: "right", marginTop: 5 }, avatar: { width: 46, height: 46, borderRadius: 16, backgroundColor: "#EAE8FF", alignItems: "center", justifyContent: "center" }, avatarText: { color: "#6658E8", fontSize: 18, fontWeight: "900" },
  callout: { backgroundColor: "#6658E8", borderRadius: 22, padding: 19, marginBottom: 24 }, calloutTitle: { color: "white", fontSize: 17, fontWeight: "900", textAlign: "right" }, calloutDesc: { color: "#E6E3FF", fontSize: 11, lineHeight: 20, marginTop: 7, marginBottom: 14, textAlign: "right" }, button: { backgroundColor: "white", borderRadius: 12, paddingVertical: 12, paddingHorizontal: 15, alignSelf: "flex-end" }, buttonText: { color: "#5144C8", fontWeight: "900", fontSize: 11 }, sectionRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, link: { color: "#6658E8", fontWeight: "800", fontSize: 11 },
  map: { height: 160, borderRadius: 21, backgroundColor: "#E7ECEF", marginBottom: 22, overflow: "hidden", position: "relative" }, pin: { position: "absolute", width: 24, height: 24, borderRadius: 13, backgroundColor: "#6658E8", borderWidth: 4, borderColor: "white" }, mapCaption: { position: "absolute", bottom: 10, right: 12, color: "#707987", fontSize: 9 },
  person: { backgroundColor: "white", borderRadius: 18, padding: 12, flexDirection: "row", alignItems: "center", marginBottom: 10, borderWidth: 1, borderColor: "#ECEEF5" }, personAvatar: { width: 50, height: 50, borderRadius: 16, backgroundColor: "#F0EDFF", alignItems: "center", justifyContent: "center" }, personAvatarText: { color: "#6658E8", fontSize: 20, fontWeight: "900" }, personInfo: { flex: 1, marginHorizontal: 11 }, personName: { color: "#24263A", fontWeight: "900", fontSize: 12, textAlign: "right" }, personKind: { color: "#8B90A0", fontSize: 10, textAlign: "right", marginTop: 3 }, personPrice: { color: "#5144C8", fontWeight: "800", fontSize: 10, textAlign: "right", marginTop: 5 }, personDistance: { color: "#A0A4B1", fontSize: 9, textAlign: "right", marginTop: 3 }, rating: { color: "#B67A16", backgroundColor: "#FFF7E8", padding: 6, borderRadius: 9, fontSize: 10, fontWeight: "900" },
  stats: { flexDirection: "row", gap: 8, marginBottom: 20 }, stat: { flex: 1, backgroundColor: "white", borderRadius: 16, paddingVertical: 15, alignItems: "center", borderWidth: 1, borderColor: "#ECEEF5" }, statValue: { color: "#6658E8", fontSize: 22, fontWeight: "900" }, statLabel: { color: "#9296A6", fontSize: 9, marginTop: 5 }, quickGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10 }, quick: { width: "48%", flexGrow: 1, backgroundColor: "white", borderRadius: 17, padding: 16, borderWidth: 1, borderColor: "#ECEEF5" }, quickTitle: { color: "#303348", fontWeight: "800", fontSize: 11, textAlign: "right" }, quickMark: { color: "#6658E8", fontSize: 22, marginTop: 10 }, switch: { marginTop: 25, padding: 13, alignItems: "center" }, switchText: { color: "#6658E8", fontSize: 12, fontWeight: "800" }
});

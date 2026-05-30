import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const localesDir = path.join(root, "src", "locales");

const en = JSON.parse(fs.readFileSync(path.join(localesDir, "en", "common.json"), "utf8"));

const worksUiByLang = {
  de: { clientsCount: "{{count}} Kunden", breadcrumbWorks: "Ausgewählte Arbeiten", clientsTitle: "Kunden, mit denen wir gearbeitet haben", projectsCompleted: "{{count}} abgeschlossene Projekte", projectsTitle: "Projektbeispiele", portfolioHubDesc: "Entdecken Sie Arbeiten nach Kategorie — Animation, VFX, Motion und mehr.", closePreview: "Vorschau schließen", ctaScript: "Bereit, wenn Sie es sind —", ctaTitle: "Starten Sie Ihr Projekt mit uns", ctaDesc: "Erzählen Sie uns von Marke, Zeitplan und Zielen.", ctaButton: "Projekt starten" },
  fr: { clientsCount: "{{count}} clients", breadcrumbWorks: "Travaux sélectionnés", clientsTitle: "Clients avec lesquels nous avons travaillé", projectsCompleted: "{{count}} projets réalisés", projectsTitle: "Exemples de projets", portfolioHubDesc: "Explorez nos travaux par catégorie — animation, VFX, motion et plus.", closePreview: "Fermer l'aperçu", ctaScript: "Prêt quand vous l'êtes —", ctaTitle: "Lancez votre projet avec nous", ctaDesc: "Parlez-nous de votre marque, de vos délais et de vos objectifs.", ctaButton: "Démarrer un projet" },
  es: { clientsCount: "{{count}} clientes", breadcrumbWorks: "Trabajos seleccionados", clientsTitle: "Clientes con los que hemos trabajado", projectsCompleted: "{{count}} proyectos completados", projectsTitle: "Muestras de proyectos", portfolioHubDesc: "Explora el trabajo por categoría — animación, VFX, motion y más.", closePreview: "Cerrar vista previa", ctaScript: "Listos cuando tú lo estés —", ctaTitle: "Inicia tu proyecto con nosotros", ctaDesc: "Cuéntanos tu marca, plazos y objetivos.", ctaButton: "Iniciar un proyecto" },
  pt: { clientsCount: "{{count}} clientes", breadcrumbWorks: "Trabalhos selecionados", clientsTitle: "Clientes com quem trabalhamos", projectsCompleted: "{{count}} projetos concluídos", projectsTitle: "Amostras de projetos", portfolioHubDesc: "Explore trabalhos por categoria — animação, VFX, motion e mais.", closePreview: "Fechar pré-visualização", ctaScript: "Prontos quando você estiver —", ctaTitle: "Inicie seu projeto conosco", ctaDesc: "Conte-nos sobre sua marca, prazos e objetivos.", ctaButton: "Iniciar um projeto" },
  it: { clientsCount: "{{count}} clienti", breadcrumbWorks: "Lavori selezionati", clientsTitle: "Clienti con cui abbiamo lavorato", projectsCompleted: "{{count}} progetti completati", projectsTitle: "Campioni di progetto", portfolioHubDesc: "Esplora i lavori per categoria — animazione, VFX, motion e altro.", closePreview: "Chiudi anteprima", ctaScript: "Pronti quando lo sei tu —", ctaTitle: "Inizia il tuo progetto con noi", ctaDesc: "Parlaci del tuo brand, tempistiche e obiettivi.", ctaButton: "Avvia un progetto" },
  ja: { clientsCount: "{{count}}社のクライアント", breadcrumbWorks: "厳選作品", clientsTitle: "これまでにご一緒したクライアント", projectsCompleted: "{{count}}件のプロジェクト完了", projectsTitle: "プロジェクトサンプル", portfolioHubDesc: "カテゴリー別に作品を探索 — アニメーション、VFX、モーションなど。", closePreview: "プレビューを閉じる", ctaScript: "準備ができたら —", ctaTitle: "私たちとプロジェクトを始めましょう", ctaDesc: "ブランド、スケジュール、目標をお聞かせください。", ctaButton: "プロジェクトを始める" },
  ko: { clientsCount: "클라이언트 {{count}}곳", breadcrumbWorks: "선정 작업", clientsTitle: "함께한 클라이언트", projectsCompleted: "완료 프로젝트 {{count}}건", projectsTitle: "프로젝트 샘플", portfolioHubDesc: "카테고리별 작업 탐색 — 애니메이션, VFX, 모션 등.", closePreview: "미리보기 닫기", ctaScript: "준비되면 —", ctaTitle: "우리와 프로젝트를 시작하세요", ctaDesc: "브랜드, 일정, 목표를 알려주세요.", ctaButton: "프로젝트 시작" },
  zh: { clientsCount: "{{count}} 位客户", breadcrumbWorks: "精选作品", clientsTitle: "合作客户", projectsCompleted: "已完成 {{count}} 个项目", projectsTitle: "项目样例", portfolioHubDesc: "按类别浏览作品 — 动画、VFX、动态图形等。", closePreview: "关闭预览", ctaScript: "准备好了 —", ctaTitle: "与我们一起开启项目", ctaDesc: "告诉我们您的品牌、时间表和目标。", ctaButton: "开始项目" },
  ar: { clientsCount: "{{count}} عميل", breadcrumbWorks: "أعمال مختارة", clientsTitle: "عملاء عملنا معهم", projectsCompleted: "{{count}} مشروع مكتمل", projectsTitle: "نماذج المشاريع", portfolioHubDesc: "استكشف الأعمال حسب الفئة — رسوم متحركة ومؤثرات بصرية وحركة والمزيد.", closePreview: "إغلاق المعاينة", ctaScript: "جاهزون عندما تكون أنت —", ctaTitle: "ابدأ مشروعك معنا", ctaDesc: "أخبرنا عن علامتك وجدولك وأهدافك.", ctaButton: "ابدأ مشروعًا" },
  ru: { clientsCount: "{{count}} клиентов", breadcrumbWorks: "Избранные работы", clientsTitle: "Клиенты, с которыми мы работали", projectsCompleted: "{{count}} завершённых проектов", projectsTitle: "Примеры проектов", portfolioHubDesc: "Изучайте работы по категориям — анимация, VFX, motion и другое.", closePreview: "Закрыть просмотр", ctaScript: "Готовы, когда вы готовы —", ctaTitle: "Начните проект с нами", ctaDesc: "Расскажите о бренде, сроках и целях.", ctaButton: "Начать проект" },
  nl: { clientsCount: "{{count}} klanten", breadcrumbWorks: "Geselecteerd werk", clientsTitle: "Klanten waarmee we hebben gewerkt", projectsCompleted: "{{count}} voltooide projecten", projectsTitle: "Projectvoorbeelden", portfolioHubDesc: "Ontdek werk per categorie — animatie, VFX, motion en meer.", closePreview: "Voorbeeld sluiten", ctaScript: "Klaar wanneer jij het bent —", ctaTitle: "Start je project met ons", ctaDesc: "Vertel ons over je merk, planning en doelen.", ctaButton: "Start een project" },
  pl: { clientsCount: "{{count}} klientów", breadcrumbWorks: "Wybrane prace", clientsTitle: "Klienci, z którymi współpracowaliśmy", projectsCompleted: "{{count}} ukończonych projektów", projectsTitle: "Przykłady projektów", portfolioHubDesc: "Przeglądaj prace według kategorii — animacja, VFX, motion i więcej.", closePreview: "Zamknij podgląd", ctaScript: "Gotowi, gdy Ty —", ctaTitle: "Rozpocznij projekt z nami", ctaDesc: "Opowiedz o marce, harmonogramie i celach.", ctaButton: "Rozpocznij projekt" },
  tr: { clientsCount: "{{count}} müşteri", breadcrumbWorks: "Seçilmiş işler", clientsTitle: "Birlikte çalıştığımız müşteriler", projectsCompleted: "{{count}} tamamlanan proje", projectsTitle: "Proje örnekleri", portfolioHubDesc: "Kategoriye göre işleri keşfedin — animasyon, VFX, motion ve daha fazlası.", closePreview: "Önizlemeyi kapat", ctaScript: "Hazır olduğunuzda —", ctaTitle: "Projenize bizimle başlayın", ctaDesc: "Markanızı, zaman çizelgenizi ve hedeflerinizi anlatın.", ctaButton: "Proje başlat" },
  hi: { clientsCount: "{{count}} क्लाइंट", breadcrumbWorks: "चयनित कार्य", clientsTitle: "जिन क्लाइंट्स के साथ हमने काम किया", projectsCompleted: "{{count}} पूर्ण प्रोजेक्ट", projectsTitle: "प्रोजेक्ट नमूने", portfolioHubDesc: "श्रेणी के अनुसार कार्य देखें — एनिमेशन, VFX, मोशन और अधिक।", closePreview: "पूर्वावलोकन बंद करें", ctaScript: "जब आप तैयार हों —", ctaTitle: "हमारे साथ अपना प्रोजेक्ट शुरू करें", ctaDesc: "अपने ब्रांड, समयसीमा और लक्ष्यों के बारे में बताएं।", ctaButton: "प्रोजेक्ट शुरू करें" },
  sv: { clientsCount: "{{count}} kunder", breadcrumbWorks: "Utvalt arbete", clientsTitle: "Kunder vi har arbetat med", projectsCompleted: "{{count}} slutförda projekt", projectsTitle: "Projektexempel", portfolioHubDesc: "Utforska arbete efter kategori — animation, VFX, motion med mera.", closePreview: "Stäng förhandsgranskning", ctaScript: "Redo när du är —", ctaTitle: "Starta ditt projekt med oss", ctaDesc: "Berätta om ditt varumärke, tidsplan och mål.", ctaButton: "Starta ett projekt" },
  da: { clientsCount: "{{count}} kunder", breadcrumbWorks: "Udvalgt arbejde", clientsTitle: "Kunder vi har arbejdet med", projectsCompleted: "{{count}} afsluttede projekter", projectsTitle: "Projekteksempler", portfolioHubDesc: "Udforsk arbejde efter kategori — animation, VFX, motion og mere.", closePreview: "Luk forhåndsvisning", ctaScript: "Klar når du er —", ctaTitle: "Start dit projekt med os", ctaDesc: "Fortæl os om dit brand, tidsplan og mål.", ctaButton: "Start et projekt" },
  no: { clientsCount: "{{count}} kunder", breadcrumbWorks: "Utvalgt arbeid", clientsTitle: "Kunder vi har jobbet med", projectsCompleted: "{{count}} fullførte prosjekter", projectsTitle: "Prosjekteksempler", portfolioHubDesc: "Utforsk arbeid etter kategori — animasjon, VFX, motion og mer.", closePreview: "Lukk forhåndsvisning", ctaScript: "Klare når du er —", ctaTitle: "Start prosjektet ditt med oss", ctaDesc: "Fortell om merkevaren, tidsplanen og målene dine.", ctaButton: "Start et prosjekt" },
  fi: { clientsCount: "{{count}} asiakasta", breadcrumbWorks: "Valitut työt", clientsTitle: "Asiakkaat, joiden kanssa olemme työskennelleet", projectsCompleted: "{{count}} valmistunutta projektia", projectsTitle: "Projektinäytteet", portfolioHubDesc: "Selaa töitä kategorioittain — animaatio, VFX, motion ja muuta.", closePreview: "Sulje esikatselu", ctaScript: "Valmiina kun sinä olet —", ctaTitle: "Aloita projektisi kanssamme", ctaDesc: "Kerro brändistäsi, aikataulusta ja tavoitteista.", ctaButton: "Aloita projekti" },
  id: { clientsCount: "{{count}} klien", breadcrumbWorks: "Karya terpilih", clientsTitle: "Klien yang pernah kami garap", projectsCompleted: "{{count}} proyek selesai", projectsTitle: "Contoh proyek", portfolioHubDesc: "Jelajahi karya per kategori — animasi, VFX, motion, dan lainnya.", closePreview: "Tutup pratinjau", ctaScript: "Siap saat Anda siap —", ctaTitle: "Mulai proyek Anda bersama kami", ctaDesc: "Ceritakan brand, timeline, dan tujuan Anda.", ctaButton: "Mulai proyek" },
  th: { clientsCount: "{{count}} ลูกค้า", breadcrumbWorks: "ผลงานที่คัดสรร", clientsTitle: "ลูกค้าที่เราเคยทำงานด้วย", projectsCompleted: "โปรเจกต์ที่เสร็จแล้ว {{count}} รายการ", projectsTitle: "ตัวอย่างโปรเจกต์", portfolioHubDesc: "สำรวจผลงานตามหมวดหมู่ — แอนิเมชัน VFX โมชัน และอื่น ๆ", closePreview: "ปิดการแสดงตัวอย่าง", ctaScript: "พร้อมเมื่อคุณพร้อม —", ctaTitle: "เริ่มโปรเจกต์กับเรา", ctaDesc: "บอกเราเกี่ยวกับแบรนด์ ไทม์ไลน์ และเป้าหมายของคุณ", ctaButton: "เริ่มโปรเจกต์" },
  vi: { clientsCount: "{{count}} khách hàng", breadcrumbWorks: "Tác phẩm chọn lọc", clientsTitle: "Khách hàng đã hợp tác", projectsCompleted: "{{count}} dự án hoàn thành", projectsTitle: "Mẫu dự án", portfolioHubDesc: "Khám phá theo danh mục — animation, VFX, motion và hơn thế.", closePreview: "Đóng xem trước", ctaScript: "Sẵn sàng khi bạn sẵn sàng —", ctaTitle: "Bắt đầu dự án với chúng tôi", ctaDesc: "Cho chúng tôi biết thương hiệu, tiến độ và mục tiêu.", ctaButton: "Bắt đầu dự án" },
  he: { clientsCount: "{{count}} לקוחות", breadcrumbWorks: "עבודות נבחרות", clientsTitle: "לקוחות שעבדנו איתם", projectsCompleted: "{{count}} פרויקטים שהושלמו", projectsTitle: "דוגמאות פרויקט", portfolioHubDesc: "גלו עבודות לפי קטגוריה — אנימציה, VFX, מושן ועוד.", closePreview: "סגור תצוגה מקדימה", ctaScript: "מוכנים כשאתם —", ctaTitle: "התחילו פרויקט איתנו", ctaDesc: "ספרו לנו על המותג, לוח הזמנים והמטרות.", ctaButton: "התחל פרויקט" },
  uk: { clientsCount: "{{count}} клієнтів", breadcrumbWorks: "Вибрані роботи", clientsTitle: "Клієнти, з якими ми працювали", projectsCompleted: "{{count}} завершених проєктів", projectsTitle: "Зразки проєктів", portfolioHubDesc: "Переглядайте роботи за категоріями — анімація, VFX, motion та інше.", closePreview: "Закрити перегляд", ctaScript: "Готові, коли ви —", ctaTitle: "Почніть проєкт з нами", ctaDesc: "Розкажіть про бренд, терміни та цілі.", ctaButton: "Почати проєкт" },
  cs: { clientsCount: "{{count}} klientů", breadcrumbWorks: "Vybrané práce", clientsTitle: "Klienti, se kterými jsme spolupracovali", projectsCompleted: "{{count}} dokončených projektů", projectsTitle: "Ukázky projektů", portfolioHubDesc: "Prozkoumejte práce podle kategorie — animace, VFX, motion a další.", closePreview: "Zavřít náhled", ctaScript: "Připraveni, až budete vy —", ctaTitle: "Začněte projekt s námi", ctaDesc: "Řekněte nám o značce, harmonogramu a cílech.", ctaButton: "Začít projekt" },
};

function deepMergeMissing(target, source) {
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
      if (!target[key] || typeof target[key] !== "object") target[key] = {};
      deepMergeMissing(target[key], source[key]);
    } else if (!(key in target)) {
      target[key] = source[key];
    }
  }
  return target;
}

function applyServiceCategoryTitles(locale) {
  const items = locale.servicesPage?.items;
  if (!items || !locale.works?.categories) return;

  const map = {
    "2d-animation": items["2d"]?.title,
    "3d-animation": items["3d"]?.title,
    vfx: items.vfx?.title,
  };

  for (const [slug, title] of Object.entries(map)) {
    if (!title || !locale.works.categories[slug]) continue;
    locale.works.categories[slug].title = title;
    if (locale.works.showcase?.[slug]) {
      locale.works.showcase[slug].tag = title;
      locale.works.showcase[slug].title = title;
    }
  }
}

function applyHomeShowcaseTitles(locale) {
  const showcase = locale.home?.showcase;
  if (!showcase || !locale.works?.showcase) return;

  const map = {
    "motion-graphics": showcase.gameArt,
    "video-editing": showcase.motion,
    branding: showcase.creature,
  };

  for (const [slug, entry] of Object.entries(map)) {
    if (!entry || !locale.works.showcase[slug]) continue;
    locale.works.showcase[slug].tag = entry.tag;
    locale.works.showcase[slug].title = entry.title;
    if (locale.works.categories[slug]) {
      locale.works.categories[slug].title = entry.title;
    }
  }
}

for (const lang of fs.readdirSync(localesDir)) {
  if (lang === "en") continue;
  const filePath = path.join(localesDir, lang, "common.json");
  const locale = JSON.parse(fs.readFileSync(filePath, "utf8"));

  deepMergeMissing(locale, en);

  locale.works = structuredClone(en.works);
  if (worksUiByLang[lang]) {
    Object.assign(locale.works, worksUiByLang[lang]);
  }

  applyServiceCategoryTitles(locale);
  applyHomeShowcaseTitles(locale);

  fs.writeFileSync(filePath, `${JSON.stringify(locale, null, 2)}\n`, "utf8");
  console.log(`Updated ${lang}/common.json`);
}

console.log("Done syncing i18n works keys.");

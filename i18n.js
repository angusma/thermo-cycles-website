/**
 * Thermo Cycles — Website Internationalisation (i18n)
 *
 * Detects the visitor's locale from:
 *   1. URL param  ?lang=xx
 *   2. localStorage  tc_lang
 *   3. navigator.language / navigator.languages
 *   4. Falls back to English
 *
 * All translatable HTML elements carry a `data-i18n="key"` attribute.
 * The script replaces their `textContent` (never innerHTML) on load.
 * RTL support is automatic for Arabic (ar) and Hebrew (he).
 */

// ---------------------------------------------------------------------------
// Translation data — website-specific strings + cycle names from the app ARBs
// ---------------------------------------------------------------------------
const TRANSLATIONS = {
  // ── English (base) ──────────────────────────────────────────────────────
  en: {
    nav_try: "Try Free Calculators",
    nav_features: "Features",
    nav_download: "Download",
    nav_privacy: "Privacy",
    nav_terms: "Terms",
    hero_badge: "For engineering students",
    hero_h1_line1: "Thermodynamic cycles,",
    hero_h1_em: "solved.",
    hero_sub: "A precise, beautiful calculator for Carnot, Otto, Diesel, Brayton, Rankine, refrigeration cycles and more. Available in 25 languages.",
    hero_cta: "Try it now",
    hero_cta2: "Download app",
    screenshots_label: "See it in action",
    screenshots_h2: "Built for engineering students",
    screenshots_desc: "Clean interface, step-by-step calculations, and comprehensive thermodynamic tables.",
    features_label: "Capabilities",
    features_h2: "Every cycle your textbook covers",
    features_desc: "From introductory thermodynamics to advanced power systems — all with step-by-step state calculations.",
    cat_gas: "Gas Power Cycles",
    cat_vapor: "Vapor Power Cycles",
    cat_ref: "Refrigeration Cycles",
    tag_free: "Free",
    tag_paid: "Paid",
    try_link: "Try it",
    cycle_carnot: "Carnot Cycle",
    cycle_otto: "Otto Cycle",
    cycle_diesel: "Diesel Cycle",
    cycle_brayton: "Brayton Cycle",
    cycle_regen_brayton: "Regenerative Brayton",
    cycle_rankine: "Rankine Cycle",
    cycle_reheated_rankine: "Reheated Rankine",
    cycle_ofwh: "Open Feedwater Heater",
    cycle_cfwh: "Closed Feedwater Heater",
    cycle_flash_chamber: "Flash Chamber",
    cycle_heat_pump_ref: "Heat Pump / Refrigeration",
    cycle_cascading: "Cascading Refrigeration",
    hl_languages: "25 Languages",
    hl_languages_desc: "Fully translated interface including all cycle diagrams, labels, and UI elements.",
    hl_units: "SI & Imperial",
    hl_units_desc: "Switch between metric and imperial units. Calculations adapt automatically.",
    hl_privacy: "No Data Collection",
    hl_privacy_desc: "All calculations run on-device. No analytics, no tracking, no accounts required.",
    hl_textbook: "Textbook Accurate",
    hl_textbook_desc: "Uses published steam tables and R-134a data with standard thermodynamic formulas.",
    dl_h2: "Get Thermo Cycles",
    dl_desc: "Free to download. Three cycles included free — unlock more with optional in-app purchases.",
    dl_appstore_soon: "Coming soon to the",
    dl_appstore: "App Store",
    dl_gplay_soon: "Coming soon to",
    dl_gplay: "Google Play",
    dl_win_soon: "Coming soon for",
    dl_win: "Windows",
    dl_mac_soon: "Coming soon for",
    dl_mac: "macOS",
    dl_soon: "Soon",
    dl_web_or: "Or",
    dl_web_cta: "try the free web calculators now",
    footer_copy: "\u00a9 2026 Thermo Cycles. For educational use only.",
    nav_contact: "Contact",
    contact_h1: "Contact Us",
    contact_desc: "Have feedback, a bug report, or a feature request? Send us a message and we'll get back to you.",
    contact_name_label: "Name",
    contact_name_placeholder: "Your name",
    contact_email_label: "Email",
    contact_email_placeholder: "you@example.com",
    contact_subject_label: "Subject",
    contact_subject_feedback: "General Feedback",
    contact_subject_bug: "Bug Report",
    contact_subject_feature: "Feature Request",
    contact_subject_other: "Other",
    contact_message_label: "Message",
    contact_message_placeholder: "Tell us what's on your mind...",
    contact_send: "Send Message",
    contact_success_h2: "Message sent!",
    contact_success_desc: "Thanks for reaching out. We'll get back to you as soon as possible.",
    contact_success_back: "Back to home",
  },

  // ── Arabic ──────────────────────────────────────────────────────────────
  ar: {
    nav_try: "جرّب الحاسبات المجانية",
    nav_features: "المميزات",
    nav_download: "تحميل",
    nav_privacy: "الخصوصية",
    nav_terms: "الشروط",
    hero_badge: "لطلاب الهندسة",
    hero_h1_line1: "الدورات الديناميكية الحرارية،",
    hero_h1_em: "تم حلّها.",
    hero_sub: "حاسبة دقيقة وجميلة لدورات كارنو، أوتو، ديزل، برايتون، رانكن، دورات التبريد والمزيد. متوفرة بـ 25 لغة.",
    hero_cta: "جرّبها الآن",
    hero_cta2: "تحميل التطبيق",
    screenshots_label: "شاهدها أثناء العمل",
    screenshots_h2: "مصممة لطلاب الهندسة",
    screenshots_desc: "واجهة نظيفة، حسابات خطوة بخطوة، وجداول ديناميكية حرارية شاملة.",
    features_label: "القدرات",
    features_h2: "كل دورة يغطيها كتابك الدراسي",
    features_desc: "من الديناميكا الحرارية التمهيدية إلى أنظمة الطاقة المتقدمة — مع حسابات حالة خطوة بخطوة.",
    cat_gas: "دورات الطاقة الغازية",
    cat_vapor: "دورات الطاقة البخارية",
    cat_ref: "دورات التبريد",
    tag_free: "مجاني",
    tag_paid: "مدفوع",
    try_link: "جرّبها",
    cycle_carnot: "دورة كارنو",
    cycle_otto: "دورة أوتو",
    cycle_diesel: "دورة ديزل",
    cycle_brayton: "دورة برايتون",
    cycle_regen_brayton: "برايتون التجديدية",
    cycle_rankine: "دورة رانكن",
    cycle_reheated_rankine: "رانكن مع إعادة التسخين",
    cycle_ofwh: "رانكن بسخّان مياه تغذية مفتوح",
    cycle_cfwh: "رانكن بسخّان مياه تغذية مغلق",
    cycle_flash_chamber: "غرفة الوميض",
    cycle_heat_pump_ref: "مضخة حرارية / تبريد",
    cycle_cascading: "تبريد متتالٍ",
    hl_languages: "25 لغة",
    hl_languages_desc: "واجهة مترجمة بالكامل تشمل جميع مخططات الدورات والتسميات.",
    hl_units: "SI والإمبراطوري",
    hl_units_desc: "التبديل بين الوحدات المترية والإمبراطورية. تتكيف الحسابات تلقائياً.",
    hl_privacy: "بدون جمع بيانات",
    hl_privacy_desc: "جميع الحسابات تعمل على الجهاز. بدون تحليلات أو تتبع أو حسابات.",
    hl_textbook: "دقة الكتاب الدراسي",
    hl_textbook_desc: "يستخدم جداول بخار منشورة وبيانات R-134a مع صيغ ديناميكية حرارية قياسية.",
    dl_h2: "احصل على Thermo Cycles",
    dl_desc: "تحميل مجاني. ثلاث دورات مجانية — افتح المزيد بمشتريات اختيارية.",
    dl_web_or: "أو",
    dl_web_cta: "جرّب الحاسبات المجانية الآن",
    footer_copy: "\u00a9 2026 Thermo Cycles. للاستخدام التعليمي فقط.",
    nav_contact: "اتصل بنا",
    contact_h1: "اتصل بنا",
    contact_desc: "لديك ملاحظات أو تقرير خطأ أو طلب ميزة؟ أرسل لنا رسالة وسنرد عليك.",
    contact_name_label: "الاسم", contact_name_placeholder: "اسمك",
    contact_email_label: "البريد الإلكتروني", contact_email_placeholder: "you@example.com",
    contact_subject_label: "الموضوع",
    contact_subject_feedback: "ملاحظات عامة", contact_subject_bug: "تقرير خطأ",
    contact_subject_feature: "طلب ميزة", contact_subject_other: "أخرى",
    contact_message_label: "الرسالة", contact_message_placeholder: "أخبرنا بما يدور في ذهنك...",
    contact_send: "إرسال الرسالة",
    contact_success_h2: "تم إرسال الرسالة!", contact_success_desc: "شكراً لتواصلك. سنرد عليك في أقرب وقت ممكن.",
    contact_success_back: "العودة للرئيسية",
  },

  // ── German ──────────────────────────────────────────────────────────────
  de: {
    nav_try: "Kostenlose Rechner testen",
    nav_features: "Funktionen",
    nav_download: "Download",
    hero_badge: "Für Ingenieurstudenten",
    hero_h1_line1: "Thermodynamische Kreisprozesse,",
    hero_h1_em: "gelöst.",
    hero_sub: "Ein präziser, eleganter Rechner für Carnot, Otto, Diesel, Brayton, Rankine, Kältekreisprozesse und mehr. Verfügbar in 25 Sprachen.",
    hero_cta: "Jetzt testen",
    hero_cta2: "App herunterladen",
    screenshots_label: "In Aktion",
    screenshots_h2: "Entwickelt für Ingenieurstudenten",
    screenshots_desc: "Klare Oberfläche, schrittweise Berechnungen und umfassende thermodynamische Tabellen.",
    features_label: "Funktionen",
    features_h2: "Jeder Kreisprozess, den Ihr Lehrbuch behandelt",
    features_desc: "Von der einführenden Thermodynamik bis zu fortgeschrittenen Energiesystemen — alles mit schrittweisen Zustandsberechnungen.",
    cat_gas: "Gas-Kraftkreisprozesse",
    cat_vapor: "Dampf-Kraftkreisprozesse",
    cat_ref: "Kältekreisprozesse",
    tag_free: "Kostenlos",
    tag_paid: "Kostenpflichtig",
    try_link: "Testen",
    cycle_carnot: "Carnot-Kreisprozess",
    cycle_otto: "Otto-Kreisprozess",
    cycle_diesel: "Diesel-Kreisprozess",
    cycle_brayton: "Brayton-Kreisprozess",
    cycle_regen_brayton: "Regenerativer Brayton",
    cycle_rankine: "Rankine-Kreisprozess",
    cycle_reheated_rankine: "Rankine mit Zwischenüberhitzung",
    cycle_ofwh: "Rankine mit offenem Speisewasservorwärmer",
    cycle_cfwh: "Rankine mit geschlossenem Speisewasservorwärmer",
    cycle_flash_chamber: "Entspannungskammer",
    cycle_heat_pump_ref: "Wärmepumpe / Kältemaschine",
    cycle_cascading: "Kaskaden-Kälteanlage",
    hl_languages: "25 Sprachen",
    hl_languages_desc: "Vollständig übersetzte Oberfläche einschließlich aller Diagramme und Beschriftungen.",
    hl_units: "SI & Imperial",
    hl_units_desc: "Zwischen metrischen und imperialen Einheiten wechseln. Berechnungen passen sich automatisch an.",
    hl_privacy: "Keine Datenerfassung",
    hl_privacy_desc: "Alle Berechnungen laufen auf dem Gerät. Keine Analytik, kein Tracking, keine Konten erforderlich.",
    hl_textbook: "Lehrbuchgenau",
    hl_textbook_desc: "Verwendet veröffentlichte Dampftafeln und R-134a-Daten mit thermodynamischen Standardformeln.",
    dl_h2: "Thermo Cycles herunterladen",
    dl_desc: "Kostenloser Download. Drei Kreisprozesse kostenlos — weitere mit optionalen In-App-Käufen freischalten.",
    dl_web_or: "Oder",
    dl_web_cta: "jetzt die kostenlosen Web-Rechner testen",
    footer_copy: "\u00a9 2026 Thermo Cycles. Nur für Bildungszwecke.",
    nav_contact: "Kontakt",
    contact_h1: "Kontakt",
    contact_desc: "Feedback, Fehlerbericht oder Feature-Wunsch? Senden Sie uns eine Nachricht und wir melden uns bei Ihnen.",
    contact_name_label: "Name", contact_name_placeholder: "Ihr Name",
    contact_email_label: "E-Mail", contact_email_placeholder: "sie@beispiel.de",
    contact_subject_label: "Betreff",
    contact_subject_feedback: "Allgemeines Feedback", contact_subject_bug: "Fehlerbericht",
    contact_subject_feature: "Feature-Wunsch", contact_subject_other: "Sonstiges",
    contact_message_label: "Nachricht", contact_message_placeholder: "Teilen Sie uns mit, was Sie denken...",
    contact_send: "Nachricht senden",
    contact_success_h2: "Nachricht gesendet!", contact_success_desc: "Vielen Dank für Ihre Nachricht. Wir melden uns so bald wie möglich.",
    contact_success_back: "Zurück zur Startseite",
  },

  // ── Spanish ─────────────────────────────────────────────────────────────
  es: {
    nav_try: "Probar calculadoras gratis",
    nav_features: "Características",
    nav_download: "Descargar",
    hero_badge: "Para estudiantes de ingeniería",
    hero_h1_line1: "Ciclos termodinámicos,",
    hero_h1_em: "resueltos.",
    hero_sub: "Una calculadora precisa y elegante para Carnot, Otto, Diesel, Brayton, Rankine, ciclos de refrigeración y más. Disponible en 25 idiomas.",
    hero_cta: "Pruébalo ahora",
    hero_cta2: "Descargar app",
    screenshots_label: "Míralo en acción",
    screenshots_h2: "Diseñado para estudiantes de ingeniería",
    screenshots_desc: "Interfaz limpia, cálculos paso a paso y tablas termodinámicas completas.",
    features_label: "Funcionalidades",
    features_h2: "Cada ciclo que cubre tu libro de texto",
    features_desc: "Desde termodinámica introductoria hasta sistemas de potencia avanzados — todo con cálculos de estado paso a paso.",
    cat_gas: "Ciclos de Potencia de Gas",
    cat_vapor: "Ciclos de Potencia de Vapor",
    cat_ref: "Ciclos de Refrigeración",
    tag_free: "Gratis",
    tag_paid: "Pago",
    try_link: "Probar",
    cycle_carnot: "Ciclo de Carnot", cycle_otto: "Ciclo Otto", cycle_diesel: "Ciclo Diesel",
    cycle_brayton: "Ciclo Brayton", cycle_regen_brayton: "Brayton Regenerativo",
    cycle_rankine: "Ciclo Rankine", cycle_reheated_rankine: "Rankine con Recalentamiento",
    cycle_ofwh: "Rankine con Calentador Abierto", cycle_cfwh: "Rankine con Calentador Cerrado",
    cycle_flash_chamber: "Cámara de Expansión Súbita", cycle_heat_pump_ref: "Bomba de Calor / Refrigeración",
    cycle_cascading: "Refrigeración en Cascada",
    hl_languages: "25 Idiomas", hl_languages_desc: "Interfaz completamente traducida, incluyendo todos los diagramas y etiquetas de ciclos.",
    hl_units: "SI e Imperial", hl_units_desc: "Cambiar entre unidades métricas e imperiales. Los cálculos se adaptan automáticamente.",
    hl_privacy: "Sin recopilación de datos", hl_privacy_desc: "Todos los cálculos se ejecutan en el dispositivo. Sin analíticas, sin rastreo, sin cuentas.",
    hl_textbook: "Precisión de libro de texto", hl_textbook_desc: "Utiliza tablas de vapor publicadas y datos de R-134a con fórmulas termodinámicas estándar.",
    dl_h2: "Obtén Thermo Cycles", dl_desc: "Descarga gratuita. Tres ciclos incluidos gratis — desbloquea más con compras opcionales.",
    dl_web_or: "O", dl_web_cta: "prueba las calculadoras web gratis ahora",
    footer_copy: "\u00a9 2026 Thermo Cycles. Solo para uso educativo.",
    nav_contact: "Contacto",
    contact_h1: "Contáctenos",
    contact_desc: "¿Tienes comentarios, un informe de error o una solicitud de función? Envíanos un mensaje y te responderemos.",
    contact_name_label: "Nombre", contact_name_placeholder: "Tu nombre",
    contact_email_label: "Correo electrónico", contact_email_placeholder: "tu@ejemplo.com",
    contact_subject_label: "Asunto",
    contact_subject_feedback: "Comentarios generales", contact_subject_bug: "Informe de error",
    contact_subject_feature: "Solicitud de función", contact_subject_other: "Otro",
    contact_message_label: "Mensaje", contact_message_placeholder: "Cuéntanos lo que piensas...",
    contact_send: "Enviar mensaje",
    contact_success_h2: "¡Mensaje enviado!", contact_success_desc: "Gracias por contactarnos. Responderemos lo antes posible.",
    contact_success_back: "Volver al inicio",
  },

  // ── French ──────────────────────────────────────────────────────────────
  fr: {
    nav_try: "Essayer les calculateurs",
    nav_features: "Fonctionnalités",
    nav_download: "Télécharger",
    hero_badge: "Pour les étudiants en ingénierie",
    hero_h1_line1: "Cycles thermodynamiques,",
    hero_h1_em: "résolus.",
    hero_sub: "Un calculateur précis et élégant pour Carnot, Otto, Diesel, Brayton, Rankine, cycles de réfrigération et plus. Disponible en 25 langues.",
    hero_cta: "Essayer maintenant", hero_cta2: "Télécharger l'app",
    screenshots_label: "En action", screenshots_h2: "Conçu pour les étudiants en ingénierie",
    screenshots_desc: "Interface épurée, calculs étape par étape et tables thermodynamiques complètes.",
    features_label: "Fonctionnalités", features_h2: "Chaque cycle couvert par votre manuel",
    features_desc: "De la thermodynamique d'introduction aux systèmes de puissance avancés — avec des calculs d'état étape par étape.",
    cat_gas: "Cycles de Puissance à Gaz", cat_vapor: "Cycles de Puissance à Vapeur", cat_ref: "Cycles de Réfrigération",
    tag_free: "Gratuit", tag_paid: "Payant", try_link: "Essayer",
    cycle_carnot: "Cycle de Carnot", cycle_otto: "Cycle Otto", cycle_diesel: "Cycle Diesel",
    cycle_brayton: "Cycle Brayton", cycle_regen_brayton: "Brayton Régénératif",
    cycle_rankine: "Cycle Rankine", cycle_reheated_rankine: "Rankine avec Resurchauffe",
    cycle_ofwh: "Rankine avec Réchauffeur Ouvert", cycle_cfwh: "Rankine avec Réchauffeur Fermé",
    cycle_flash_chamber: "Chambre de Détente", cycle_heat_pump_ref: "Pompe à Chaleur / Réfrigération",
    cycle_cascading: "Réfrigération en Cascade",
    hl_languages: "25 Langues", hl_languages_desc: "Interface entièrement traduite, y compris tous les diagrammes et étiquettes.",
    hl_units: "SI & Impérial", hl_units_desc: "Basculer entre unités métriques et impériales. Les calculs s'adaptent automatiquement.",
    hl_privacy: "Aucune collecte de données", hl_privacy_desc: "Tous les calculs s'exécutent sur l'appareil. Pas d'analytique, pas de suivi, pas de compte requis.",
    hl_textbook: "Précision académique", hl_textbook_desc: "Utilise des tables de vapeur publiées et des données R-134a avec des formules thermodynamiques standard.",
    dl_h2: "Obtenir Thermo Cycles", dl_desc: "Téléchargement gratuit. Trois cycles inclus — débloquez-en plus avec des achats optionnels.",
    dl_web_or: "Ou", dl_web_cta: "essayez les calculateurs web gratuits maintenant",
    footer_copy: "\u00a9 2026 Thermo Cycles. Usage éducatif uniquement.",
    nav_contact: "Contact",
    contact_h1: "Nous contacter",
    contact_desc: "Un retour, un rapport de bug ou une demande de fonctionnalité ? Envoyez-nous un message et nous vous répondrons.",
    contact_name_label: "Nom", contact_name_placeholder: "Votre nom",
    contact_email_label: "E-mail", contact_email_placeholder: "vous@exemple.fr",
    contact_subject_label: "Sujet",
    contact_subject_feedback: "Commentaires généraux", contact_subject_bug: "Rapport de bug",
    contact_subject_feature: "Demande de fonctionnalité", contact_subject_other: "Autre",
    contact_message_label: "Message", contact_message_placeholder: "Dites-nous ce que vous avez en tête...",
    contact_send: "Envoyer le message",
    contact_success_h2: "Message envoyé !", contact_success_desc: "Merci de nous avoir contacté. Nous vous répondrons dès que possible.",
    contact_success_back: "Retour à l'accueil",
  },

  // ── Japanese ────────────────────────────────────────────────────────────
  ja: {
    nav_try: "無料計算機を試す", nav_features: "機能", nav_download: "ダウンロード",
    hero_badge: "工学部学生向け",
    hero_h1_line1: "熱力学サイクル、", hero_h1_em: "解決。",
    hero_sub: "カルノー、オットー、ディーゼル、ブレイトン、ランキン、冷凍サイクルなどの精密で美しい計算機。25言語対応。",
    hero_cta: "今すぐ試す", hero_cta2: "アプリをダウンロード",
    screenshots_label: "動作を見る", screenshots_h2: "工学部学生のために設計",
    screenshots_desc: "クリーンなインターフェース、段階的な計算、包括的な熱力学テーブル。",
    features_label: "機能", features_h2: "教科書に載っているすべてのサイクル",
    features_desc: "入門熱力学から高度な動力システムまで — すべて段階的な状態計算付き。",
    cat_gas: "ガス動力サイクル", cat_vapor: "蒸気動力サイクル", cat_ref: "冷凍サイクル",
    tag_free: "無料", tag_paid: "有料", try_link: "試す",
    cycle_carnot: "カルノーサイクル", cycle_otto: "オットーサイクル", cycle_diesel: "ディーゼルサイクル",
    cycle_brayton: "ブレイトンサイクル", cycle_regen_brayton: "再生ブレイトン",
    cycle_rankine: "ランキンサイクル", cycle_reheated_rankine: "再熱ランキン",
    cycle_ofwh: "開放型給水加熱器付きランキン", cycle_cfwh: "密閉型給水加熱器付きランキン",
    cycle_flash_chamber: "フラッシュ蒸発器", cycle_heat_pump_ref: "ヒートポンプ / 冷凍機",
    cycle_cascading: "多段冷凍サイクル",
    hl_languages: "25言語", hl_languages_desc: "サイクル図やラベルを含む完全翻訳インターフェース。",
    hl_units: "SI & ヤードポンド", hl_units_desc: "メートル法とヤードポンド法を切り替え。計算は自動適応。",
    hl_privacy: "データ収集なし", hl_privacy_desc: "すべての計算はデバイス上で実行。分析、追跡、アカウント不要。",
    hl_textbook: "教科書準拠", hl_textbook_desc: "公開蒸気表とR-134aデータを標準熱力学公式で使用。",
    dl_h2: "Thermo Cyclesを入手", dl_desc: "無料ダウンロード。3つのサイクルを無料で含む — オプションの購入でさらに解除。",
    dl_web_or: "または", dl_web_cta: "無料ウェブ計算機を今すぐ試す",
    footer_copy: "\u00a9 2026 Thermo Cycles. 教育目的のみ。",
    nav_contact: "お問い合わせ",
    contact_h1: "お問い合わせ",
    contact_desc: "フィードバック、バグ報告、機能リクエストがありますか？メッセージをお送りください。",
    contact_name_label: "お名前", contact_name_placeholder: "お名前",
    contact_email_label: "メール", contact_email_placeholder: "you@example.com",
    contact_subject_label: "件名",
    contact_subject_feedback: "一般的なフィードバック", contact_subject_bug: "バグ報告",
    contact_subject_feature: "機能リクエスト", contact_subject_other: "その他",
    contact_message_label: "メッセージ", contact_message_placeholder: "ご意見をお聞かせください...",
    contact_send: "メッセージを送信",
    contact_success_h2: "送信完了！", contact_success_desc: "お問い合わせありがとうございます。できるだけ早くお返事いたします。",
    contact_success_back: "ホームに戻る",
  },

  // ── Chinese (Simplified) ───────────────────────────────────────────────
  zh: {
    nav_try: "试用免费计算器", nav_features: "功能", nav_download: "下载",
    hero_badge: "面向工科学生",
    hero_h1_line1: "热力学循环，", hero_h1_em: "已解决。",
    hero_sub: "精确、优雅的卡诺、奥托、狄塞尔、布雷顿、朗肯、制冷循环等计算器。支持25种语言。",
    hero_cta: "立即试用", hero_cta2: "下载应用",
    screenshots_label: "实际演示", screenshots_h2: "为工科学生打造",
    screenshots_desc: "简洁界面、逐步计算和全面的热力学数据表。",
    features_label: "功能", features_h2: "教科书中的每个循环",
    features_desc: "从入门热力学到高级动力系统——均提供逐步状态计算。",
    cat_gas: "燃气动力循环", cat_vapor: "蒸汽动力循环", cat_ref: "制冷循环",
    tag_free: "免费", tag_paid: "付费", try_link: "试用",
    cycle_carnot: "卡诺循环", cycle_otto: "奥托循环", cycle_diesel: "狄塞尔循环",
    cycle_brayton: "布雷顿循环", cycle_regen_brayton: "回热布雷顿",
    cycle_rankine: "朗肯循环", cycle_reheated_rankine: "再热朗肯",
    cycle_ofwh: "开式给水加热器朗肯", cycle_cfwh: "闭式给水加热器朗肯",
    cycle_flash_chamber: "闪蒸室", cycle_heat_pump_ref: "热泵 / 制冷机",
    cycle_cascading: "多级制冷循环",
    hl_languages: "25种语言", hl_languages_desc: "完全翻译的界面，包括所有循环图表和标签。",
    hl_units: "SI和英制", hl_units_desc: "在公制和英制单位之间切换。计算自动适应。",
    hl_privacy: "不收集数据", hl_privacy_desc: "所有计算在设备上运行。无分析、无追踪、无需账户。",
    hl_textbook: "教科书精度", hl_textbook_desc: "使用已发表的蒸汽表和R-134a数据，采用标准热力学公式。",
    dl_h2: "获取 Thermo Cycles", dl_desc: "免费下载。包含三个免费循环——通过可选购买解锁更多。",
    dl_web_or: "或", dl_web_cta: "立即试用免费网页计算器",
    footer_copy: "\u00a9 2026 Thermo Cycles. 仅供教育用途。",
    nav_contact: "联系我们",
    contact_h1: "联系我们",
    contact_desc: "有反馈、错误报告或功能请求？给我们发消息，我们会回复您。",
    contact_name_label: "姓名", contact_name_placeholder: "您的姓名",
    contact_email_label: "邮箱", contact_email_placeholder: "you@example.com",
    contact_subject_label: "主题",
    contact_subject_feedback: "一般反馈", contact_subject_bug: "错误报告",
    contact_subject_feature: "功能请求", contact_subject_other: "其他",
    contact_message_label: "留言", contact_message_placeholder: "告诉我们您的想法...",
    contact_send: "发送消息",
    contact_success_h2: "消息已发送！", contact_success_desc: "感谢您的联系。我们会尽快回复您。",
    contact_success_back: "返回首页",
  },

  // ── Korean ──────────────────────────────────────────────────────────────
  ko: {
    nav_try: "무료 계산기 사용해보기", nav_features: "기능", nav_download: "다운로드",
    hero_badge: "공학도를 위한",
    hero_h1_line1: "열역학 사이클,", hero_h1_em: "해결.",
    hero_sub: "카르노, 오토, 디젤, 브레이턴, 랭킨, 냉동 사이클 등을 위한 정밀하고 아름다운 계산기. 25개 언어 지원.",
    hero_cta: "지금 사용해보기", hero_cta2: "앱 다운로드",
    screenshots_label: "실제 사용 모습", screenshots_h2: "공학도를 위해 설계",
    screenshots_desc: "깔끔한 인터페이스, 단계별 계산, 종합 열역학 테이블.",
    features_label: "기능", features_h2: "교과서의 모든 사이클",
    features_desc: "기초 열역학부터 고급 동력 시스템까지 — 단계별 상태 계산 포함.",
    cat_gas: "가스 동력 사이클", cat_vapor: "증기 동력 사이클", cat_ref: "냉동 사이클",
    tag_free: "무료", tag_paid: "유료", try_link: "사용해보기",
    cycle_carnot: "카르노 사이클", cycle_otto: "오토 사이클", cycle_diesel: "디젤 사이클",
    cycle_brayton: "브레이턴 사이클", cycle_regen_brayton: "재생 브레이턴",
    cycle_rankine: "랭킨 사이클", cycle_reheated_rankine: "재열 랭킨",
    cycle_ofwh: "개방형 급수가열기 랭킨", cycle_cfwh: "폐쇄형 급수가열기 랭킨",
    cycle_flash_chamber: "플래시 챔버", cycle_heat_pump_ref: "열펌프 / 냉동기",
    cycle_cascading: "다단 냉동 사이클",
    hl_languages: "25개 언어", hl_languages_desc: "모든 사이클 다이어그램과 레이블을 포함한 완전 번역 인터페이스.",
    hl_units: "SI & 야드파운드", hl_units_desc: "미터법과 야드파운드법 전환. 계산이 자동으로 적응.",
    hl_privacy: "데이터 수집 없음", hl_privacy_desc: "모든 계산은 기기에서 실행. 분석, 추적, 계정 불필요.",
    hl_textbook: "교과서 정확도", hl_textbook_desc: "표준 열역학 공식과 공개된 증기표 및 R-134a 데이터 사용.",
    dl_h2: "Thermo Cycles 받기", dl_desc: "무료 다운로드. 세 가지 사이클 무료 포함 — 선택적 구매로 더 많이 해제.",
    dl_web_or: "또는", dl_web_cta: "무료 웹 계산기를 지금 사용해보세요",
    footer_copy: "\u00a9 2026 Thermo Cycles. 교육 목적 전용.",
    nav_contact: "문의",
    contact_h1: "문의하기",
    contact_desc: "피드백, 버그 신고 또는 기능 요청이 있으신가요? 메시지를 보내주시면 답변드리겠습니다.",
    contact_name_label: "이름", contact_name_placeholder: "이름",
    contact_email_label: "이메일", contact_email_placeholder: "you@example.com",
    contact_subject_label: "제목",
    contact_subject_feedback: "일반 피드백", contact_subject_bug: "버그 신고",
    contact_subject_feature: "기능 요청", contact_subject_other: "기타",
    contact_message_label: "메시지", contact_message_placeholder: "의견을 알려주세요...",
    contact_send: "메시지 보내기",
    contact_success_h2: "전송 완료!", contact_success_desc: "문의해 주셔서 감사합니다. 가능한 빨리 답변드리겠습니다.",
    contact_success_back: "홈으로 돌아가기",
  },

  // ── Portuguese ──────────────────────────────────────────────────────────
  pt: {
    nav_try: "Testar calculadoras grátis", nav_features: "Recursos", nav_download: "Download",
    hero_badge: "Para estudantes de engenharia",
    hero_h1_line1: "Ciclos termodinâmicos,", hero_h1_em: "resolvidos.",
    hero_sub: "Uma calculadora precisa e elegante para Carnot, Otto, Diesel, Brayton, Rankine, ciclos de refrigeração e mais. Disponível em 25 idiomas.",
    hero_cta: "Testar agora", hero_cta2: "Baixar app",
    cat_gas: "Ciclos de Potência a Gás", cat_vapor: "Ciclos de Potência a Vapor", cat_ref: "Ciclos de Refrigeração",
    tag_free: "Grátis", tag_paid: "Pago", try_link: "Testar",
    cycle_carnot: "Ciclo de Carnot", cycle_otto: "Ciclo Otto", cycle_diesel: "Ciclo Diesel",
    cycle_brayton: "Ciclo Brayton", cycle_regen_brayton: "Brayton Regenerativo",
    cycle_rankine: "Ciclo Rankine", cycle_reheated_rankine: "Rankine com Reaquecimento",
    cycle_ofwh: "Rankine com Aquecedor Aberto", cycle_cfwh: "Rankine com Aquecedor Fechado",
    cycle_flash_chamber: "Câmara de Expansão", cycle_heat_pump_ref: "Bomba de Calor / Refrigeração",
    cycle_cascading: "Refrigeração em Cascata",
    dl_h2: "Obtenha Thermo Cycles", dl_desc: "Download gratuito. Três ciclos grátis — desbloqueie mais com compras opcionais.",
    dl_web_or: "Ou", dl_web_cta: "teste as calculadoras web grátis agora",
    footer_copy: "\u00a9 2026 Thermo Cycles. Apenas para uso educacional.",
    nav_contact: "Contato",
    contact_h1: "Fale Conosco",
    contact_desc: "Tem feedback, um relatório de bug ou um pedido de funcionalidade? Envie-nos uma mensagem e entraremos em contato.",
    contact_name_label: "Nome", contact_name_placeholder: "Seu nome",
    contact_email_label: "E-mail", contact_email_placeholder: "voce@exemplo.com",
    contact_subject_label: "Assunto",
    contact_subject_feedback: "Feedback geral", contact_subject_bug: "Relatório de bug",
    contact_subject_feature: "Pedido de funcionalidade", contact_subject_other: "Outro",
    contact_message_label: "Mensagem", contact_message_placeholder: "Conte-nos o que pensa...",
    contact_send: "Enviar mensagem",
    contact_success_h2: "Mensagem enviada!", contact_success_desc: "Obrigado por entrar em contato. Responderemos o mais rápido possível.",
    contact_success_back: "Voltar ao início",
  },

  // ── Russian ─────────────────────────────────────────────────────────────
  ru: {
    nav_try: "Попробовать бесплатно", nav_features: "Возможности", nav_download: "Скачать",
    hero_badge: "Для студентов-инженеров",
    hero_h1_line1: "Термодинамические циклы,", hero_h1_em: "решены.",
    hero_sub: "Точный и элегантный калькулятор для циклов Карно, Отто, Дизеля, Брайтона, Ренкина, холодильных циклов и других. Доступен на 25 языках.",
    hero_cta: "Попробовать сейчас", hero_cta2: "Скачать приложение",
    cat_gas: "Газовые энергетические циклы", cat_vapor: "Паровые энергетические циклы", cat_ref: "Холодильные циклы",
    tag_free: "Бесплатно", tag_paid: "Платно", try_link: "Попробовать",
    cycle_carnot: "Цикл Карно", cycle_otto: "Цикл Отто", cycle_diesel: "Цикл Дизеля",
    cycle_brayton: "Цикл Брайтона", cycle_regen_brayton: "Регенеративный Брайтона",
    cycle_rankine: "Цикл Ренкина", cycle_reheated_rankine: "Ренкина с промперегревом",
    cycle_ofwh: "Ренкина с открытым ПВД", cycle_cfwh: "Ренкина с закрытым ПВД",
    cycle_flash_chamber: "Расширительная камера", cycle_heat_pump_ref: "Тепловой насос / Холодильник",
    cycle_cascading: "Каскадное охлаждение",
    dl_h2: "Скачать Thermo Cycles", dl_desc: "Бесплатная загрузка. Три цикла бесплатно — разблокируйте больше с дополнительными покупками.",
    dl_web_or: "Или", dl_web_cta: "попробуйте бесплатные веб-калькуляторы сейчас",
    footer_copy: "\u00a9 2026 Thermo Cycles. Только для образовательных целей.",
    nav_contact: "Контакт",
    contact_h1: "Свяжитесь с нами",
    contact_desc: "Есть отзыв, сообщение об ошибке или запрос на функцию? Отправьте нам сообщение, и мы ответим.",
    contact_name_label: "Имя", contact_name_placeholder: "Ваше имя",
    contact_email_label: "Эл. почта", contact_email_placeholder: "you@example.com",
    contact_subject_label: "Тема",
    contact_subject_feedback: "Общий отзыв", contact_subject_bug: "Отчёт об ошибке",
    contact_subject_feature: "Запрос функции", contact_subject_other: "Другое",
    contact_message_label: "Сообщение", contact_message_placeholder: "Расскажите, что у вас на уме...",
    contact_send: "Отправить сообщение",
    contact_success_h2: "Сообщение отправлено!", contact_success_desc: "Спасибо за обращение. Мы ответим вам как можно скорее.",
    contact_success_back: "Вернуться на главную",
  },

  // ── Italian ─────────────────────────────────────────────────────────────
  it: {
    nav_try: "Prova le calcolatrici gratis", nav_features: "Funzionalità", nav_download: "Scarica",
    hero_badge: "Per studenti di ingegneria",
    hero_h1_line1: "Cicli termodinamici,", hero_h1_em: "risolti.",
    hero_sub: "Un calcolatore preciso ed elegante per Carnot, Otto, Diesel, Brayton, Rankine, cicli di refrigerazione e altro. Disponibile in 25 lingue.",
    hero_cta: "Provalo ora", hero_cta2: "Scarica l'app",
    cat_gas: "Cicli di Potenza a Gas", cat_vapor: "Cicli di Potenza a Vapore", cat_ref: "Cicli di Refrigerazione",
    tag_free: "Gratuito", tag_paid: "A pagamento", try_link: "Prova",
    cycle_carnot: "Ciclo di Carnot", cycle_otto: "Ciclo Otto", cycle_diesel: "Ciclo Diesel",
    cycle_brayton: "Ciclo Brayton", cycle_regen_brayton: "Brayton Rigenerativo",
    cycle_rankine: "Ciclo Rankine", cycle_reheated_rankine: "Rankine con Risurriscaldamento",
    cycle_ofwh: "Rankine con Riscaldatore Aperto", cycle_cfwh: "Rankine con Riscaldatore Chiuso",
    cycle_flash_chamber: "Camera di Espansione", cycle_heat_pump_ref: "Pompa di Calore / Refrigerazione",
    cycle_cascading: "Refrigerazione a Cascata",
    dl_h2: "Ottieni Thermo Cycles", dl_desc: "Download gratuito. Tre cicli inclusi gratis — sblocca di più con acquisti opzionali.",
    dl_web_or: "O", dl_web_cta: "prova le calcolatrici web gratuite ora",
    footer_copy: "\u00a9 2026 Thermo Cycles. Solo per uso educativo.",
    nav_contact: "Contatti",
    contact_h1: "Contattaci",
    contact_desc: "Hai un feedback, una segnalazione di bug o una richiesta di funzionalità? Inviaci un messaggio e ti risponderemo.",
    contact_name_label: "Nome", contact_name_placeholder: "Il tuo nome",
    contact_email_label: "Email", contact_email_placeholder: "tu@esempio.it",
    contact_subject_label: "Oggetto",
    contact_subject_feedback: "Feedback generale", contact_subject_bug: "Segnalazione bug",
    contact_subject_feature: "Richiesta funzionalità", contact_subject_other: "Altro",
    contact_message_label: "Messaggio", contact_message_placeholder: "Dicci cosa hai in mente...",
    contact_send: "Invia messaggio",
    contact_success_h2: "Messaggio inviato!", contact_success_desc: "Grazie per averci contattato. Ti risponderemo il prima possibile.",
    contact_success_back: "Torna alla home",
  },

  // ── Czech ───────────────────────────────────────────────────────────────
  cs: {
    cat_gas: "Plynove energeticke cykly", cat_vapor: "Parne energeticke cykly", cat_ref: "Chladicí cykly",
    cycle_carnot: "Carnotův cyklus", cycle_otto: "Ottův cyklus", cycle_diesel: "Dieselův cyklus",
    cycle_brayton: "Braytonův cyklus", cycle_regen_brayton: "Regenerativní Braytonův",
    cycle_rankine: "Rankinův cyklus", cycle_reheated_rankine: "Přihřívaný Rankinův",
    cycle_ofwh: "Otevřený ohřívák napájecí vody Rankine", cycle_cfwh: "Uzavřený ohřívák napájecí vody Rankine",
    cycle_flash_chamber: "Expandní komora", cycle_heat_pump_ref: "Tepelné čerpadlo / Chlazení",
    cycle_cascading: "Kaskádové chlazení",
    tag_free: "Zdarma", tag_paid: "Placené",
  },

  // ── Greek ───────────────────────────────────────────────────────────────
  el: {
    cat_gas: "Κύκλοι ισχύος αερίων", cat_vapor: "Κύκλοι ισχύος ατμού", cat_ref: "Κύκλοι ψύξης",
    cycle_carnot: "Κύκλος Carnot", cycle_otto: "Κύκλος Otto", cycle_diesel: "Κύκλος Diesel",
    cycle_brayton: "Κύκλος Brayton", cycle_regen_brayton: "Αναγεννητικός Brayton",
    cycle_rankine: "Κύκλος Rankine", cycle_reheated_rankine: "Αναθερμαινόμενος Rankine",
    cycle_ofwh: "Ανοιχτός προθερμαντήρας τροφοδοσίας Rankine", cycle_cfwh: "Κλειστός προθερμαντήρας τροφοδοσίας Rankine",
    cycle_flash_chamber: "Θάλαμος εκτόνωσης", cycle_heat_pump_ref: "Αντλία θερμότητας / Ψύξη",
    cycle_cascading: "Διβάθμια ψύξη",
    tag_free: "Δωρεάν", tag_paid: "Επί πληρωμή",
  },

  // ── Filipino ────────────────────────────────────────────────────────────
  fil: {
    cat_gas: "Mga Siklo ng Lakas ng Gas", cat_vapor: "Mga Siklo ng Lakas ng Singaw", cat_ref: "Mga Siklo ng Pagpapalamig",
    cycle_carnot: "Siklo ng Carnot", cycle_otto: "Siklo ng Otto", cycle_diesel: "Siklo ng Diesel",
    cycle_brayton: "Siklo ng Brayton", cycle_regen_brayton: "Regeneratibong Brayton",
    cycle_rankine: "Siklo ng Rankine", cycle_reheated_rankine: "Muling Pinainit na Rankine",
    cycle_ofwh: "Bukas na Pampainit ng Tubig-Suplay Rankine", cycle_cfwh: "Saradong Pampainit ng Tubig-Suplay Rankine",
    cycle_flash_chamber: "Silid ng Flash", cycle_heat_pump_ref: "Bomba ng Init / Pagpapalamig",
    cycle_cascading: "Kaskadang Pagpapalamig",
    tag_free: "Libre", tag_paid: "Bayad",
  },

  // ── Hindi ───────────────────────────────────────────────────────────────
  hi: {
    cat_gas: "गैस शक्ति चक्र", cat_vapor: "वाष्प शक्ति चक्र", cat_ref: "प्रशीतन चक्र",
    cycle_carnot: "कार्नो चक्र", cycle_otto: "ऑटो चक्र", cycle_diesel: "डीज़ल चक्र",
    cycle_brayton: "ब्रेटन चक्र", cycle_regen_brayton: "पुनरुत्पादी ब्रेटन",
    cycle_rankine: "रैंकिन चक्र", cycle_reheated_rankine: "पुनः तापित रैंकिन",
    cycle_ofwh: "खुला फ़ीडवॉटर हीटर रैंकिन", cycle_cfwh: "बंद फ़ीडवॉटर हीटर रैंकिन",
    cycle_flash_chamber: "फ्लैश चैम्बर", cycle_heat_pump_ref: "ऊष्मा पम्प / प्रशीतन",
    cycle_cascading: "कैस्केडिंग प्रशीतन",
    tag_free: "निःशुल्क", tag_paid: "सशुल्क",
  },

  // ── Indonesian ──────────────────────────────────────────────────────────
  id: {
    cat_gas: "Siklus Daya Gas", cat_vapor: "Siklus Daya Uap", cat_ref: "Siklus Refrigerasi",
    cycle_carnot: "Siklus Carnot", cycle_otto: "Siklus Otto", cycle_diesel: "Siklus Diesel",
    cycle_brayton: "Siklus Brayton", cycle_regen_brayton: "Brayton Regeneratif",
    cycle_rankine: "Siklus Rankine", cycle_reheated_rankine: "Rankine Pemanasan Ulang",
    cycle_ofwh: "Rankine Pemanas Air Umpan Terbuka", cycle_cfwh: "Rankine Pemanas Air Umpan Tertutup",
    cycle_flash_chamber: "Ruang Flash", cycle_heat_pump_ref: "Pompa Kalor / Refrigerasi",
    cycle_cascading: "Refrigerasi Bertingkat",
    tag_free: "Gratis", tag_paid: "Berbayar",
  },

  // ── Malay ───────────────────────────────────────────────────────────────
  ms: {
    cat_gas: "Kitaran Kuasa Gas", cat_vapor: "Kitaran Kuasa Wap", cat_ref: "Kitaran Penyejukan",
    cycle_carnot: "Kitaran Carnot", cycle_otto: "Kitaran Otto", cycle_diesel: "Kitaran Diesel",
    cycle_brayton: "Kitaran Brayton", cycle_regen_brayton: "Brayton Regeneratif",
    cycle_rankine: "Kitaran Rankine", cycle_reheated_rankine: "Rankine Pemanasan Semula",
    cycle_ofwh: "Rankine Pemanas Air Suapan Terbuka", cycle_cfwh: "Rankine Pemanas Air Suapan Tertutup",
    cycle_flash_chamber: "Kebuk Kilat", cycle_heat_pump_ref: "Pam Haba / Penyejukan",
    cycle_cascading: "Penyejukan Bertingkat",
    tag_free: "Percuma", tag_paid: "Berbayar",
  },

  // ── Polish ──────────────────────────────────────────────────────────────
  pl: {
    cat_gas: "Gazowe obiegi siłowe", cat_vapor: "Parowe obiegi siłowe", cat_ref: "Obiegi chłodnicze",
    cycle_carnot: "Cykl Carnota", cycle_otto: "Obieg Otta", cycle_diesel: "Obieg Diesla",
    cycle_brayton: "Obieg Braytona", cycle_regen_brayton: "Regeneracyjny Braytona",
    cycle_rankine: "Obieg Rankine'a", cycle_reheated_rankine: "Rankine z przegrzewem",
    cycle_ofwh: "Rankine z otwartym podgrzewaczem", cycle_cfwh: "Rankine z zamkniętym podgrzewaczem",
    cycle_flash_chamber: "Komora rozprężna", cycle_heat_pump_ref: "Pompa ciepła / Chłodzenie",
    cycle_cascading: "Chłodzenie kaskadowe",
    tag_free: "Bezpłatny", tag_paid: "Płatny",
  },

  // ── Thai ────────────────────────────────────────────────────────────────
  th: {
    cat_gas: "วัฏจักรกำลังแก๊ส", cat_vapor: "วัฏจักรกำลังไอน้ำ", cat_ref: "วัฏจักรทำความเย็น",
    cycle_carnot: "วัฏจักรคาร์โนต์", cycle_otto: "วัฏจักร Otto", cycle_diesel: "วัฏจักร Diesel",
    cycle_brayton: "วัฏจักร Brayton", cycle_regen_brayton: "Brayton แบบรีเจนเนอเรทีฟ",
    cycle_rankine: "วัฏจักร Rankine", cycle_reheated_rankine: "Rankine แบบอุ่นซ้ำ",
    cycle_ofwh: "Rankine เครื่องอุ่นน้ำป้อนแบบเปิด", cycle_cfwh: "Rankine เครื่องอุ่นน้ำป้อนแบบปิด",
    cycle_flash_chamber: "ห้องแฟลช", cycle_heat_pump_ref: "ปั๊มความร้อน / ทำความเย็น",
    cycle_cascading: "ทำความเย็นแบบหลายขั้น",
    tag_free: "ฟรี", tag_paid: "เสียค่าใช้จ่าย",
  },

  // ── Turkish ─────────────────────────────────────────────────────────────
  tr: {
    cat_gas: "Gaz Güç Çevrimleri", cat_vapor: "Buhar Güç Çevrimleri", cat_ref: "Soğutma Çevrimleri",
    cycle_carnot: "Carnot Çevrimi", cycle_otto: "Otto Çevrimi", cycle_diesel: "Diesel Çevrimi",
    cycle_brayton: "Brayton Çevrimi", cycle_regen_brayton: "Rejeneratif Brayton",
    cycle_rankine: "Rankine Çevrimi", cycle_reheated_rankine: "Ara Kızdırmalı Rankine",
    cycle_ofwh: "Açık Besleme Suyu Isıtıcılı Rankine", cycle_cfwh: "Kapalı Besleme Suyu Isıtıcılı Rankine",
    cycle_flash_chamber: "Flaş Odası", cycle_heat_pump_ref: "Isı Pompası / Soğutma",
    cycle_cascading: "Kademeli Soğutma",
    tag_free: "Ücretsiz", tag_paid: "Ücretli",
  },

  // ── Vietnamese ──────────────────────────────────────────────────────────
  vi: {
    cat_gas: "Chu trình động lực khí", cat_vapor: "Chu trình động lực hơi", cat_ref: "Chu trình lạnh",
    cycle_carnot: "Chu trình Carnot", cycle_otto: "Chu trình Otto", cycle_diesel: "Chu trình Diesel",
    cycle_brayton: "Chu trình Brayton", cycle_regen_brayton: "Brayton tái sinh",
    cycle_rankine: "Chu trình Rankine", cycle_reheated_rankine: "Rankine quá nhiệt lại",
    cycle_ofwh: "Rankine bình gia nhiệt nước cấp hở", cycle_cfwh: "Rankine bình gia nhiệt nước cấp kín",
    cycle_flash_chamber: "Buồng bay hơi nhanh", cycle_heat_pump_ref: "Bơm nhiệt / Làm lạnh",
    cycle_cascading: "Làm lạnh nhiều tầng",
    tag_free: "Miễn phí", tag_paid: "Trả phí",
  },
};

// ---------------------------------------------------------------------------
// Language names — shown in the language switcher dropdown
// ---------------------------------------------------------------------------
const LANG_NAMES = {
  en: "English",
  ar: "العربية",
  cs: "Čeština",
  de: "Deutsch",
  el: "Ελληνικά",
  es: "Español",
  fil: "Filipino",
  fr: "Français",
  hi: "हिन्दी",
  id: "Bahasa Indonesia",
  it: "Italiano",
  ja: "日本語",
  ko: "한국어",
  ms: "Bahasa Melayu",
  pl: "Polski",
  pt: "Português",
  ru: "Русский",
  th: "ไทย",
  tr: "Türkçe",
  vi: "Tiếng Việt",
  zh: "中文",
};

// RTL languages
const RTL_LANGS = new Set(["ar", "he"]);

// ---------------------------------------------------------------------------
// Locale detection
// ---------------------------------------------------------------------------
function detectLocale() {
  // 1. URL param
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang");
  if (urlLang && TRANSLATIONS[urlLang]) return urlLang;

  // 2. Saved preference
  const saved = localStorage.getItem("tc_lang");
  if (saved && TRANSLATIONS[saved]) return saved;

  // 3. Browser language
  const langs = navigator.languages || [navigator.language || "en"];
  for (const tag of langs) {
    const base = tag.split("-")[0].toLowerCase();
    if (TRANSLATIONS[base]) return base;
  }

  return "en";
}

// ---------------------------------------------------------------------------
// Apply translations
// ---------------------------------------------------------------------------
function t(locale, key) {
  // Try exact locale, then fall back to English
  const dict = TRANSLATIONS[locale];
  if (dict && dict[key] !== undefined) return dict[key];
  return TRANSLATIONS.en[key] || key;
}

function applyTranslations(locale) {
  // Set dir and lang on html
  const html = document.documentElement;
  html.lang = locale;
  html.dir = RTL_LANGS.has(locale) ? "rtl" : "ltr";

  // Translate all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(locale, key);
  });

  // Translate elements with data-i18n-placeholder (form inputs)
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", t(locale, key));
  });

  // Translate elements with data-i18n-title (tooltips, aria-labels)
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    el.setAttribute("title", t(locale, key));
    el.setAttribute("aria-label", t(locale, key));
  });

  // Update language switcher display
  const switcher = document.getElementById("lang-current");
  if (switcher) {
    switcher.textContent = LANG_NAMES[locale] || locale;
  }

  // Highlight the active language in dropdown
  document.querySelectorAll(".lang-option").forEach((opt) => {
    opt.classList.toggle("active", opt.dataset.lang === locale);
  });

  // Save preference
  localStorage.setItem("tc_lang", locale);
}

// ---------------------------------------------------------------------------
// Language switcher
// ---------------------------------------------------------------------------
function initLanguageSwitcher() {
  const toggle = document.getElementById("lang-toggle");
  const dropdown = document.getElementById("lang-dropdown");
  if (!toggle || !dropdown) return;

  // Populate dropdown
  for (const [code, name] of Object.entries(LANG_NAMES)) {
    const btn = document.createElement("button");
    btn.className = "lang-option";
    btn.dataset.lang = code;
    btn.textContent = name;
    btn.type = "button";
    btn.addEventListener("click", () => {
      applyTranslations(code);
      dropdown.classList.remove("open");
    });
    dropdown.appendChild(btn);
  }

  // Toggle dropdown
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("open");
  });

  // Close on outside click
  document.addEventListener("click", () => {
    dropdown.classList.remove("open");
  });
  dropdown.addEventListener("click", (e) => e.stopPropagation());
}

// ---------------------------------------------------------------------------
// Mobile hamburger menu
// ---------------------------------------------------------------------------
function initHamburger() {
  const hamburger = document.getElementById("nav-hamburger");
  const navLinks = document.getElementById("nav-links");
  const overlay = document.getElementById("nav-overlay");

  function toggleMenu() {
    const isOpen = navLinks.classList.contains("open");
    navLinks.classList.toggle("open");
    if (overlay) overlay.classList.toggle("open");
    hamburger.classList.toggle("open");
    document.body.style.overflow = isOpen ? "" : "hidden";
  }

  function closeMenu() {
    navLinks.classList.remove("open");
    if (overlay) overlay.classList.remove("open");
    hamburger.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }
  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }
  if (navLinks) {
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }
}

// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const locale = detectLocale();
  initLanguageSwitcher();
  initHamburger();
  applyTranslations(locale);
});

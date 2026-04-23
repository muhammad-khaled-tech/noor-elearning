export interface Category {
  id: number;
  name_ar: string;
  name_en: string;
  icon: string;
  count: number;
}

export interface Instructor {
  id: number;
  name_ar: string;
  name_en: string;
  specialty_ar: string;
  specialty_en: string;
  avatar: string;
  rating: number;
  students: number;
  courses: number;
  bio_ar: string;
  bio_en: string;
}

export interface CurriculumSection {
  section_ar: string;
  section_en: string;
  lessons: number;
  duration: string;
}

export interface Course {
  id: number;
  title_ar: string;
  title_en: string;
  instructor_id: number;
  category_id: number;
  level_ar: string;
  level_en: string;
  price: number;
  original_price: number;
  rating: number;
  reviews_count: number;
  students_count: number;
  duration_hours: number;
  lessons_count: number;
  thumbnail: string;
  description_ar: string;
  description_en: string;
  tags: string[];
  certificate: boolean;
  bestseller: boolean;
  curriculum: CurriculumSection[];
}

export const categories: Category[] = [
  { id: 1, name_ar: "تطوير الويب", name_en: "Web Development", icon: "💻", count: 48 },
  { id: 2, name_ar: "تصميم الجرافيك", name_en: "Graphic Design", icon: "🎨", count: 32 },
  { id: 3, name_ar: "التسويق الرقمي", name_en: "Digital Marketing", icon: "📈", count: 27 },
  { id: 4, name_ar: "ريادة الأعمال", name_en: "Entrepreneurship", icon: "🚀", count: 19 },
  { id: 5, name_ar: "الذكاء الاصطناعي", name_en: "Artificial Intelligence", icon: "🤖", count: 15 },
  { id: 6, name_ar: "اللغة الإنجليزية", name_en: "English Language", icon: "🌍", count: 41 },
];

export const instructors: Instructor[] = [
  {
    id: 1,
    name_ar: "د. أحمد الشريف",
    name_en: "Dr. Ahmed Al-Sharif",
    specialty_ar: "تطوير الويب والبرمجة",
    specialty_en: "Web Development & Programming",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 4.9,
    students: 12400,
    courses: 8,
    bio_ar: "مطور ويب بخبرة 12 عاماً وأستاذ جامعي سابق. علّم أكثر من 12,000 طالب في العالم العربي.",
    bio_en: "Web developer with 12 years of experience and former university professor. Taught over 12,000 students in the Arab world.",
  },
  {
    id: 2,
    name_ar: "سارة المنصوري",
    name_en: "Sara Al-Mansouri",
    specialty_ar: "التصميم وتجربة المستخدم",
    specialty_en: "Design & UX",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 4.8,
    students: 8900,
    courses: 5,
    bio_ar: "مصممة UI/UX حاصلة على شهادات من Google وAWS. متخصصة في التصميم للجمهور العربي.",
    bio_en: "UI/UX designer certified by Google and AWS. Specialized in design for English and Arabic speakers.",
  },
  {
    id: 3,
    name_ar: "محمد الغامدي",
    name_en: "Mohammed Al-Ghamdi",
    specialty_ar: "التسويق الرقمي",
    specialty_en: "Digital Marketing",
    avatar: "https://i.pravatar.cc/150?img=33",
    rating: 4.7,
    students: 6200,
    courses: 6,
    bio_ar: "خبير تسويق رقمي عمل مع أكبر العلامات التجارية في الخليج العربي.",
    bio_en: "Digital marketing expert who has worked with leading brands in the Arabian Gulf.",
  },
  {
    id: 4,
    name_ar: "نور الهدى",
    name_en: "Nour Al-Huda",
    specialty_ar: "الذكاء الاصطناعي",
    specialty_en: "Artificial Intelligence",
    avatar: "https://i.pravatar.cc/150?img=45",
    rating: 4.9,
    students: 4100,
    courses: 3,
    bio_ar: "باحثة في الذكاء الاصطناعي وعلوم البيانات، حاصلة على دكتوراه من MIT.",
    bio_en: "AI and Data Science researcher with a PhD from MIT.",
  },
];

export const courses: Course[] = [
  {
    id: 1,
    title_ar: "تطوير تطبيقات الويب الكاملة",
    title_en: "Full Stack Web Development",
    instructor_id: 1,
    category_id: 1,
    level_ar: "مبتدئ إلى متقدم",
    level_en: "Beginner to Advanced",
    price: 299,
    original_price: 599,
    rating: 4.9,
    reviews_count: 2341,
    students_count: 8400,
    duration_hours: 42,
    lessons_count: 185,
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400",
    description_ar: "الدورة الأشمل في تطوير الويب باللغة العربية — من HTML إلى React وNode.js",
    description_en: "The most comprehensive course in web development — from HTML to React and Node.js",
    tags: ["React", "Node.js", "MongoDB", "TypeScript"],
    certificate: true,
    bestseller: true,
    curriculum: [
      { section_ar: "مقدمة في البرمجة", section_en: "Introduction to Programming", lessons: 12, duration: "3:20" },
      { section_ar: "HTML وCSS المتقدم", section_en: "Advanced HTML & CSS", lessons: 24, duration: "7:45" },
      { section_ar: "JavaScript الأساسيات", section_en: "JavaScript Basics", lessons: 38, duration: "12:10" },
      { section_ar: "React من الصفر", section_en: "React from Scratch", lessons: 52, duration: "16:30" },
    ],
  },
  {
    id: 2,
    title_ar: "تصميم واجهات المستخدم باحترافية",
    title_en: "Professional UI/UX Design",
    instructor_id: 2,
    category_id: 2,
    level_ar: "متوسط",
    level_en: "Intermediate",
    price: 249,
    original_price: 499,
    rating: 4.8,
    reviews_count: 1856,
    students_count: 6200,
    duration_hours: 28,
    lessons_count: 120,
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400",
    description_ar: "تعلم Figma وأسس التصميم العربي وإنشاء تجارب مستخدم استثنائية",
    description_en: "Learn Figma, the foundations of design, and create exceptional user experiences.",
    tags: ["Figma", "UI Design", "UX Research", "Prototyping"],
    certificate: true,
    bestseller: false,
    curriculum: [],
  },
  {
    id: 3,
    title_ar: "التسويق الرقمي من الصفر للاحتراف",
    title_en: "Digital Marketing Masterclass",
    instructor_id: 3,
    category_id: 3,
    level_ar: "مبتدئ",
    level_en: "Beginner",
    price: 199,
    original_price: 399,
    rating: 4.7,
    reviews_count: 3102,
    students_count: 11500,
    duration_hours: 35,
    lessons_count: 156,
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
    description_ar: "إتقن فيسبوك وإنستغرام وGoogle Ads وSEO وبناء المحتوى",
    description_en: "Master Facebook, Instagram, Google Ads, SEO, and content creation.",
    tags: ["SEO", "Facebook Ads", "Google Ads", "Content Marketing"],
    certificate: true,
    bestseller: true,
    curriculum: [],
  },
  {
    id: 4,
    title_ar: "الذكاء الاصطناعي للمبتدئين",
    title_en: "AI for Beginners",
    instructor_id: 4,
    category_id: 5,
    level_ar: "مبتدئ",
    level_en: "Beginner",
    price: 349,
    original_price: 699,
    rating: 4.9,
    reviews_count: 987,
    students_count: 3800,
    duration_hours: 30,
    lessons_count: 98,
    thumbnail: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400",
    description_ar: "فهم الذكاء الاصطناعي وتطبيقاته في الأعمال والتكنولوجيا",
    description_en: "Understand Artificial Intelligence and its applications in business and technology.",
    tags: ["Python", "Machine Learning", "ChatGPT", "Data Science"],
    certificate: true,
    bestseller: false,
    curriculum: [],
  },
  {
    id: 5,
    title_ar: "ريادة الأعمال الرقمية",
    title_en: "Digital Entrepreneurship",
    instructor_id: 3,
    category_id: 4,
    level_ar: "متوسط",
    level_en: "Intermediate",
    price: 279,
    original_price: 549,
    rating: 4.6,
    reviews_count: 1445,
    students_count: 5100,
    duration_hours: 22,
    lessons_count: 88,
    thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400",
    description_ar: "كيف تبني مشروعك الرقمي وتوصله للنجاح في السوق العربي",
    description_en: "How to build your digital project and make it successful in the Arab market.",
    tags: ["Startup", "Business Model", "Funding", "Growth"],
    certificate: true,
    bestseller: false,
    curriculum: [],
  },
  {
    id: 6,
    title_ar: "اللغة الإنجليزية للمحترفين",
    title_en: "English for Professionals",
    instructor_id: 2,
    category_id: 6,
    level_ar: "متوسط إلى متقدم",
    level_en: "Intermediate to Advanced",
    price: 179,
    original_price: 349,
    rating: 4.8,
    reviews_count: 2890,
    students_count: 14200,
    duration_hours: 40,
    lessons_count: 200,
    thumbnail: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400",
    description_ar: "تحسين لغتك الإنجليزية في بيئة العمل والمقابلات والكتابة المهنية",
    description_en: "Improve your English in the workplace, interviews, and professional writing.",
    tags: ["Business English", "Writing", "Speaking", "IELTS"],
    certificate: true,
    bestseller: true,
    curriculum: [],
  },
];

export const testimonials = [
  {
    id: 1,
    student_name_ar: "عبدالرحمن الخالدي",
    student_name_en: "Abdulrahman Al-Khalidi",
    avatar: "https://i.pravatar.cc/150?img=7",
    course_ar: "تطوير تطبيقات الويب الكاملة",
    course_en: "Full Stack Web Development",
    rating: 5,
    text_ar: "بعد إتمام هذه الدورة، حصلت على وظيفة كمطور React براتب ممتاز. المحتوى باللغة العربية جعل الفهم أسهل بكثير من أي مصدر إنجليزي جربته.",
    text_en: "After completing this course, I got a job as a React developer with an excellent salary. The content in Arabic made it much easier than any English source I've tried.",
  },
  {
    id: 2,
    student_name_ar: "فاطمة العمري",
    student_name_en: "Fatima Al-Omari",
    avatar: "https://i.pravatar.cc/150?img=49",
    course_ar: "تصميم واجهات المستخدم",
    course_en: "UI/UX Design",
    rating: 5,
    text_ar: "الدورة غيّرت نظرتي للتصميم بالكامل. الأستاذة سارة لديها أسلوب رائع في الشرح، والمشاريع التطبيقية أضافت لمعرض أعمالي بشكل كبير.",
    text_en: "The course completely changed my view of design. Sara has a great teaching style, and the practical projects added a lot to my portfolio.",
  },
  {
    id: 3,
    student_name_ar: "خالد المطيري",
    student_name_en: "Khalid Al-Mutairi",
    avatar: "https://i.pravatar.cc/150?img=15",
    course_ar: "التسويق الرقمي",
    course_en: "Digital Marketing",
    rating: 5,
    text_ar: "طبّقت ما تعلمته مباشرةً على مشروعي الصغير ورأيت نتائج خلال أسبوعين. ROI حقيقي من دورة حقيقية.",
    text_en: "I applied what I learned directly to my small business and saw results within two weeks. Real ROI from a real course.",
  },
];

export const dashboardData = {
  enrolled_courses: [
    { course_id: 1, progress: 68, last_lesson_ar: "مكونات React المتقدمة", last_lesson_en: "Advanced React Components", last_accessed_ar: "منذ يومين", last_accessed_en: "2 days ago" },
    { course_id: 3, progress: 34, last_lesson_ar: "إعداد حملة Facebook Ads", last_lesson_en: "Setting up Facebook Ads", last_accessed_ar: "منذ 5 أيام", last_accessed_en: "5 days ago" },
    { course_id: 6, progress: 91, last_lesson_ar: "Writing Professional Emails", last_lesson_en: "Writing Professional Emails", last_accessed_ar: "أمس", last_accessed_en: "Yesterday" },
  ],
  weekly_hours: [
    { day_ar: "السبت", day_en: "Sat", hours: 2.5 },
    { day_ar: "الأحد", day_en: "Sun", hours: 1.0 },
    { day_ar: "الاثنين", day_en: "Mon", hours: 3.0 },
    { day_ar: "الثلاثاء", day_en: "Tue", hours: 0.5 },
    { day_ar: "الأربعاء", day_en: "Wed", hours: 2.0 },
    { day_ar: "الخميس", day_en: "Thu", hours: 4.0 },
    { day_ar: "الجمعة", day_en: "Fri", hours: 1.5 },
  ],
  certificates_earned: 2,
  total_hours: 47,
  streak_days: 12,
};

// Add this to your existing src/data/content.ts
export type Category = "all" | "kitchen" | "door" | "closet" | "upvc-windows";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: Category;
  className: string; // Tailored grid span definitions
}

export const GALLERY_CATEGORIES: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Kitchen", value: "kitchen" },
  { label: "Door", value: "door" },
  { label: "Closet", value: "closet" },
  { label: "uPVC Windows", value: "upvc-windows" },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    src: "/Gal_Img01.png",
    alt: "Luxury Modern Kitchen Island",
    category: "kitchen",
    className: "md:col-span-2 md:row-span-2 h-[400px] md:h-[600px]",
  },
  {
    id: "gal-2",
    src: "/Gal_Img02.jpg",
    alt: "uPVC Premium Windows Lounge",
    category: "upvc-windows",
    className: "md:col-span-1 md:row-span-1 h-[200px] md:h-[288px]",
  },
  {
    id: "gal-3",
    src: "/Gal_Img03.png",
    alt: "Minimalist Kitchen Cabinetry",
    category: "kitchen",
    className: "md:col-span-1 md:row-span-1 h-[200px] md:h-[288px]",
  },
  {
    id: "gal-4",
    src: "/Gal_Img04.jpg",
    alt: "Bright Modern Living Room Fitting",
    category: "upvc-windows", // Or generalized dynamic item
    className: "md:col-span-2 md:row-span-1 h-[250px] md:h-[288px]",
  },
  {
    id: "gal-5",
    src: "/Gal_Img05.png",
    alt: "Luxury Walk-In Built-In Closet",
    category: "closet",
    className: "md:col-span-2 md:row-span-1 h-[250px] md:h-[288px]",
  },
  {
    id: "gal-6",
    src: "/Gal_Img06.png",
    alt: "Bespoke Classic Wooden Carved Door",
    category: "door",
    className: "md:col-span-1 md:row-span-1 h-[250px] md:h-[288px]",
  },
  {
    id: "gal-7",
    src: "/Gal_Img07.jpg",
    alt: "Grand Villa Living Room Fit-Out",
    category: "all",
    className: "md:col-span-1 md:row-span-1 h-[250px] md:h-[288px]",
  },
];

export const FEATURE_BANNER_CONTENT = {
  title: "Why Villa Owners Choose Ideal Factory",
  imageSrc: "/str.png",
  imageAlt: "3D Isometric Luxury Kitchen Design Layout",
  bullets: [
    "One factory for kitchens, wardrobes, doors, and premium window systems.",
    "Fast 3D design before production",
    "Precision manufacturing with European machinery",
    "Solutions designed for UAE villas",
  ],
  ctaText: "Start Your Free 3D Design",
};


// Add to src/data/content.ts
export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarSrc: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "Lorem ipsum dolor sit amet consectetura dipiscin g ipsum rephen elit libero facilisis etiam ridiculus Lorem ipsum dolor sit amet consectetura dipiscin g ipsum rephen elit libero facilisis etiam ridiculus",
    author: "Sarah Johnson",
    role: "Customer",
    avatarSrc: "/t_avatar01.png", // Save Sarah's face asset here
  },
  {
    id: "test-2",
    quote: "Lorem ipsum dolor sit amet consectetura dipiscin g ipsum rephen elit libero facilisis etiam ridiculus Lorem ipsum dolor sit amet consectetura dipiscin g ipsum rephen elit libero facilisis etiam ridiculus",
    author: "Alex Roke",
    role: "Customer",
    avatarSrc: "/t_avatar02.png", // Save Alex's face asset here
  },
  {
    id: "test-3",
    quote: "Working with Ideal Factory transformed our villa build. The premium uPVC windows and modular kitchen integrations were delivered precisely on schedule with immaculate finishing.",
    author: "Tariq Al-Mansoor",
    role: "Villa Owner, Jumeirah",
    avatarSrc: "/t_avatar01.png", 
  }
];
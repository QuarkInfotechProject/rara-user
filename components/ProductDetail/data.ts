export const trekDataApiResponse = {
  success: true,
  message: "Trek data fetched successfully",
  data: {
    type: "trek",
    title: "Annapurna Base Camp Trek",
    location: {
      region: "Annapurna Region",
      district: "Kaski",
    },
    rating: {
      score: 4.8,
      maxScore: 5,
      reviewText: "reviews",
    },
    gallery: {
      images: [
        {
          id: 1,
          src: "/assets/3.png",
          alt: "Stunning mountain views along the Annapurna Base Camp trek route",
        },
        {
          id: 2,
          src: "/assets/2.png",
          alt: "Traditional teahouse accommodation in the Annapurna region",
        },
        {
          id: 3,
          src: "/assets/1.png",
          alt: "Trekkers enjoying the scenic Himalayan landscape",
        },
        {
          id: 4,
          src: "/assets/3.png",
          alt: "Panoramic view of Annapurna massif from base camp",
        },
        {
          id: 5,
          src: "/assets/3.png",
          alt: "Stunning mountain views along the Annapurna Base Camp trek route",
        },
        {
          id: 6,
          src: "/assets/2.png",
          alt: "Traditional teahouse accommodation in the Annapurna region",
        },
        {
          id: 7,
          src: "/assets/1.png",
          alt: "Trekkers enjoying the scenic Himalayan landscape",
        },
        {
          id: 8,
          src: "/assets/3.png",
          alt: "Panoramic view of Annapurna massif from base camp",
        },
      ],
    },
    intro:
      "The renowned Annapurna Circuit, enhanced by a breath-taking detour to Tilicho Lake at 4900 meters, promises an exceptional and memorable trekking experience in Nepal.",

    overview: {
      description:
        "The Annapurna Base Camp Trek is a carefully designed journey that offers spectacular mountain views, diverse landscapes, and rich cultural experiences. Perfect for adventurers seeking to experience the beauty of the Annapurna region safely and comfortably.",
      details: {
        duration: "12 days",
        location: "Nepal",
        tripGrade: "Moderate",
        maximumAltitude: "4130 Meter",
        groupSize: "Max 12 Persons",
        activities: "Trekking",
        bestTime: "Mar-May, Sep-Nov",
        starts: "Pokhara",
      },
      highlights: [
        "360 Degree views at Annapurna Base Camp.",
        "You get to cover two (ABC and MBC) base camps in one trek.",
        "See the amazingly shaped Machhapuchre mountain, fish tail, dominate your skyline.",
        "Watch the sunrise over the Annapurna mountains from the base camp.",
        "See spectacular waterfalls and glacier-fed rivers.",
        "Learn about the traditions and culture of the Gurung people in Ghandruk village.",
        "Experience hiking through forests ablaze with red rhododendrons in the spring.",
        "Enjoy the relaxing hot water pool at Jhinu Danda.",
      ],
    },
    altitude_chart: {
      id: 1,
      src: "/assets/altitude-chart.png",
      alt: "Stunning mountain views along the Annapurna Base Camp trek route",
    },
    cost_detail: {
      includes: [
        {
          id: 1,
          text: "Airport Pick-Up & Drop-Off",
        },
        {
          id: 2,
          text: "All Internal Transfers Flights",
        },
        {
          id: 3,
          text: "Gear Shopping Assistance",
        },
        {
          id: 4,
          text: "Meals in the Itinerary",
        },
        {
          id: 5,
          text: "Accommodations in the Itinerary",
        },
        {
          id: 6,
          text: "Dedicated RTT Team Leader",
        },
        {
          id: 7,
          text: "Guides, Porters & Permits",
        },
        {
          id: 8,
          text: "Indicated Team Equipment",
        },
        {
          id: 9,
          text: "RT Original Photography",
        },
        {
          id: 10,
          text: "Pre-Adventure Guide",
        },
      ],
      excludes: [
        {
          id: 1,
          text: "International Flights",
        },
        {
          id: 2,
          text: "Entry Visas",
        },
        {
          id: 3,
          text: "Tips & Gratuities for Local Team",
        },
        {
          id: 4,
          text: "Personal Gear & Rentals",
        },
        {
          id: 5,
          text: "Personal Medical Insurance",
        },
        {
          id: 6,
          text: "Personal Travel Insurance",
        },
        {
          id: 7,
          text: "Alcoholic Beverages",
        },
        {
          id: 8,
          text: "Additional Nights Outside the Itinerary",
        },
        {
          id: 9,
          text: "Fitness & Nutrition Guides (Not necessary)",
        },
      ],
    },
    itinerary: {
      day1: {
        title: "Arrival in Pokhara - Trek Preparation",
        description:
          "Arrive in the beautiful lakeside city of Pokhara. Meet your trekking guide and team, complete final preparations, gear check, and trek briefing. Explore the vibrant lakeside area and enjoy stunning views of the Annapurna range.",
        duration: "Full Day",
        location: "Pokhara",
        maxAltitude: "822 Meter",
        activities: "City tour, Trek briefing, Gear check",
        accommodation: "Hotel",
        meal: "Dinner included",
      },
      day2: {
        title: "Drive to Nayapul - Trek to Tikhedhunga",
        description:
          "Early morning drive from Pokhara to Nayapul (1.5 hours). Begin the trek by crossing the suspension bridge over Modi Khola and walking through beautiful villages and terraced fields to reach Tikhedhunga.",
        duration: "5-6 hours",
        location: "Nayapul to Tikhedhunga",
        maxAltitude: "1570 Meter",
        activities: "Trekking, Village exploration",
        accommodation: "Tea House",
        meal: "Breakfast, Lunch, Dinner",
      },
      day3: {
        title: "Trek to Ghorepani via Ulleri",
        description:
          "Challenging climb up the famous stone steps to Ulleri village, then continue through rhododendron forests to reach the beautiful hilltop village of Ghorepani. Enjoy panoramic mountain views and prepare for the early morning Poon Hill hike.",
        duration: "6-7 hours",
        location: "Tikhedhunga to Ghorepani",
        maxAltitude: "2850 Meter",
        activities: "Uphill trekking, Forest hiking",
        accommodation: "Tea House",
        meal: "Breakfast, Lunch, Dinner",
      },
      day4: {
        title: "Poon Hill Sunrise - Trek to Tadapani",
        description:
          "Pre-dawn hike to Poon Hill (3210m) for spectacular sunrise views over Dhaulagiri, Annapurna, and Machhapuchre. Return to Ghorepani for breakfast, then trek through rhododendron forests to the peaceful village of Tadapani.",
        duration: "7-8 hours",
        location: "Ghorepani to Tadapani via Poon Hill",
        maxAltitude: "3210 Meter",
        activities: "Sunrise viewing, Mountain photography, Forest trekking",
        accommodation: "Tea House",
        meal: "Breakfast, Lunch, Dinner",
      },
      day5: {
        title: "Trek to Chhomrong",
        description:
          "Descend through beautiful forests with occasional mountain glimpses, cross the Kimrong Khola, and climb up to the large Gurung village of Chhomrong. Enjoy magnificent close-up views of Annapurna South and Machhapuchre.",
        duration: "5-6 hours",
        location: "Tadapani to Chhomrong",
        maxAltitude: "2170 Meter",
        activities:
          "Mountain viewing, Cultural interaction, Village exploration",
        accommodation: "Tea House",
        meal: "Breakfast, Lunch, Dinner",
      },
      day6: {
        title: "Trek to Bamboo",
        description:
          "Steep descent to the Chhomrong Khola, cross the river and begin the climb into the Modi Khola valley. Pass through Sinuwa and continue through dense bamboo and rhododendron forests to reach Bamboo village.",
        duration: "5-6 hours",
        location: "Chhomrong to Bamboo",
        maxAltitude: "2310 Meter",
        activities: "River crossing, Forest trekking, Wildlife spotting",
        accommodation: "Tea House",
        meal: "Breakfast, Lunch, Dinner",
      },
      day7: {
        title: "Trek to Himalaya Hotel",
        description:
          "Continue deeper into the Modi Khola gorge through pristine forests. Cross several streams and avalanche zones while enjoying the dramatic change in landscape as you enter the high alpine zone.",
        duration: "4-5 hours",
        location: "Bamboo to Himalaya Hotel",
        maxAltitude: "2920 Meter",
        activities: "Alpine trekking, Stream crossing, Landscape photography",
        accommodation: "Tea House",
        meal: "Breakfast, Lunch, Dinner",
      },
      day8: {
        title: "Trek to Machhapuchre Base Camp (MBC)",
        description:
          "Enter the spectacular amphitheater of the Annapurna Sanctuary. Trek through the alpine meadow with incredible 360-degree mountain views. Reach MBC with stunning close-up views of Machhapuchre (Fish Tail).",
        duration: "3-4 hours",
        location: "Himalaya Hotel to MBC",
        maxAltitude: "3700 Meter",
        activities:
          "Alpine meadow trekking, Mountain photography, Acclimatization",
        accommodation: "Tea House",
        meal: "Breakfast, Lunch, Dinner",
      },
      day9: {
        title: "Trek to Annapurna Base Camp - Explore ABC",
        description:
          "Early morning trek to Annapurna Base Camp, the ultimate destination! Surrounded by towering peaks including Annapurna I, II, III, IV, Gangapurna, and Machhapuchre. Spend time at base camp enjoying the 360-degree mountain panorama.",
        duration: "2-3 hours trek + exploration",
        location: "MBC to Annapurna Base Camp",
        maxAltitude: "4130 Meter",
        activities:
          "Summit achievement, Mountain panorama viewing, Photography",
        accommodation: "Tea House",
        meal: "Breakfast, Lunch, Dinner",
      },
      day10: {
        title: "Sunrise at ABC - Descend to Bamboo",
        description:
          "Wake up early for spectacular sunrise views over the Annapurna range. After breakfast and photos, begin the long descent back through Himalaya Hotel to Bamboo, retracing your steps through the changing landscapes.",
        duration: "7-8 hours",
        location: "ABC to Bamboo",
        maxAltitude: "4130 Meter (starting point)",
        activities: "Sunrise viewing, Long descent, Forest return",
        accommodation: "Tea House",
        meal: "Breakfast, Lunch, Dinner",
      },
      day11: {
        title: "Trek to Jhinu Danda - Hot Springs",
        description:
          "Continue descent to Chhomrong, then take a different route down to Jhinu Danda. Famous for its natural hot springs, perfect for relaxing your tired muscles. Enjoy a therapeutic soak while reflecting on your amazing journey.",
        duration: "6-7 hours",
        location: "Bamboo to Jhinu Danda",
        maxAltitude: "1780 Meter",
        activities: "Descent trekking, Hot spring bathing, Muscle relaxation",
        accommodation: "Tea House",
        meal: "Breakfast, Lunch, Dinner",
      },
      day12: {
        title: "Trek to Nayapul - Drive to Pokhara",
        description:
          "Final day of trekking! Descend to New Bridge, then walk to Nayapul where your trek officially ends. Drive back to Pokhara for celebration dinner and reflection on your incredible Annapurna Base Camp adventure.",
        duration: "3-4 hours trek + 1.5 hours drive",
        location: "Jhinu Danda to Pokhara via Nayapul",
        maxAltitude: "1780 Meter (starting point)",
        activities: "Final descent, Celebration, City return",
        accommodation: "Hotel",
        meal: "Breakfast, Lunch, Celebration Dinner",
      },
    },
    trip_location: {
      image: {
        id: 1,
        src: "/assets/map.png",
        alt: "Stunning mountain views along the Annapurna Base Camp trek route",
      },
      description: `Trekking journey officially starts from <strong>Pokhara, Nepal</strong>. 
    You can reach there from Kathmandu via <strong>Air trip</strong> as well as <strong>bus trip</strong>.<br/><br/>
    During the trek we will cover areas like <strong>Dunche</strong>, <strong>Melamchi</strong>, 
    <strong>Dhodhara Gadi</strong>, <strong>Machucsit Jharna</strong>, <strong>Booklin Highway</strong>, 
    <strong>Icey Lake Kuri</strong>, <strong>Pooh hill</strong>, and <strong>Annapurna Base Camp</strong>. 
    The journey we will be covering is also in that same order.
  `,
    },
    departureData: {
      "August 2025": [
        {
          id: 1,
          dateRange: "August 10 2025 - August 25 2025",
          price: "$ 2,100",
        },
        {
          id: 2,
          dateRange: "August 15 2025 - August 30 2025",
          statusSubtext: "few seats left",
          price: "$ 2,250",
        },
        {
          id: 3,
          dateRange: "August 22 2025 - September 6 2025",
          price: "$ 2,100",
        },
      ],
      "September 2025": [
        {
          id: 4,
          dateRange: "September 5 2025 - September 20 2025",
          statusSubtext: "booking open",
          price: "$ 2,300",
        },
        {
          id: 5,
          dateRange: "September 12 2025 - September 27 2025",
          price: "$ 2,400",
        },
        {
          id: 6,
          dateRange: "September 25 2025 - October 10 2025",
          statusSubtext: "2 seats left",
          price: "$ 2,350",
        },
      ],
      "October 2025": [
        {
          id: 7,
          dateRange: "October 8 2025 - October 23 2025",
          statusSubtext: "booking open",
          price: "$ 2,500",
        },
        {
          id: 8,
          dateRange: "October 20 2025 - November 4 2025",
          price: "$ 2,600",
        },
      ],
      "November 2025": [],
      "December 2025": [
        {
          id: 9,
          dateRange: "December 15 2025 - December 30 2025",
          statusSubtext: "limited time",
          price: "$ 2,800",
        },
        {
          id: 10,
          dateRange: "December 22 2025 - January 6 2026",
          statusSubtext: "new year package",
          price: "$ 3,200",
        },
      ],
    },
    faqData: {
      images: [
        {
          id: 1,
          src: "/assets/faq.png",
          alt: "Annapurna Base Camp trek frequently asked questions",
        },
        {
          id: 2,
          src: "/assets/faq.png",
          alt: "Trekking guide answering questions from trekkers",
        },
        {
          id: 3,
          src: "/assets/faq.png",
          alt: "Mountain landscape with trekking information",
        },
        {
          id: 4,
          src: "/assets/faq.png",
          alt: "Preparation and planning for Himalayan trekking",
        },
      ],
      questions: [
        {
          question: "Why is Annapurna best trek in Nepal?",
          answer:
            "The Annapurna Circuit is considered one of the best treks in Nepal due to its diverse landscapes, ranging from subtropical forests to high-altitude deserts. It offers stunning mountain views, rich cultural experiences with local communities, and the challenging yet rewarding Thorong La Pass at 5,416m.",
        },
        {
          question:
            "How much difficult is it for basic new beginners to the world of trekking?",
          answer:
            "For complete beginners, the Annapurna Base Camp trek is moderately challenging but achievable with proper preparation. You'll need basic fitness (ability to walk 5-7 hours daily), no technical climbing skills required. Start with shorter hikes 2-3 months before, focus on cardio and leg strength, and consider hiring a guide for your first Himalayan experience.",
        },
        {
          question: "What is the best time of year to do the ABC trek?",
          answer:
            "The optimal times for ABC trek are pre-monsoon (March-May) and post-monsoon (September-November). March-May offers blooming rhododendrons and warmer weather, while September-November provides crystal clear mountain views and stable weather. Avoid monsoon season (June-August) due to heavy rainfall and poor visibility.",
        },
        {
          question: "What permits are required for the ABC trek?",
          answer:
            "You need two permits for ABC trek: Annapurna Conservation Area Permit (ACAP) costing NPR 3,000 for foreigners, and TIMS (Trekkers' Information Management System) card costing NPR 2,000. Both can be obtained in Kathmandu or Pokhara. Bring passport photos and copies of your passport.",
        },
        {
          question: "How long does the ABC trek take?",
          answer:
            "The standard ABC trek typically takes 7-12 days depending on your itinerary and acclimatization needs. Most trekkers complete it in 8-10 days, including rest days. This allows proper acclimatization and time to enjoy the stunning mountain views without rushing.",
        },
        {
          question: "What should I pack for the ABC trek?",
          answer:
            "Essential items include: layered clothing system, waterproof jacket and pants, trekking boots, sleeping bag (rated -10°C), headlamp, water purification tablets, first aid kit, and trekking poles. Pack light but don't compromise on safety gear. Most equipment can be rented in Pokhara if needed.",
        },
        {
          question: "Do I need a guide for ABC trek?",
          answer:
            "While not mandatory, hiring a local guide is highly recommended, especially for beginners. Guides provide safety, cultural insights, help with navigation, and support during emergencies. They're familiar with weather patterns, altitude sickness symptoms, and can enhance your overall trekking experience significantly.",
        },
        {
          question: "What is the maximum altitude of ABC trek?",
          answer:
            "Annapurna Base Camp sits at 4,130 meters (13,549 feet) above sea level. The trek involves gradual altitude gain which helps with acclimatization. Most trekkers don't experience severe altitude sickness due to the gradual ascent, but it's important to stay hydrated and ascend slowly.",
        },
        {
          question: "How much does the ABC trek cost?",
          answer:
            "Total cost varies widely: budget trekking (teahouses, no guide) costs $300-500, mid-range with guide costs $600-900, and premium organized treks cost $1000-1500. This includes permits, accommodation, meals, guide/porter fees, and transportation. Costs depend on service level and group size.",
        },
      ],
    },
    reviewsData: [
      {
        id: 1,
        name: "Sailesh Rijal",
        trek: "Langtang valley trek",
        rating: 5,
        avatar: "/assets/1.png",
        review:
          "Langtang Valley was beyond breath-taking quiet trails, snow-capped peaks, and heart-warming locals. But what truly made it unforgettable was Rara Treks. From the moment we landed in Kathmandu, everything was seamless. Our guide was incredibly knowledgeable and shared local stories that added soul to the experience. The teahouses, the pacing, the safety everything was handled with care. I came back not just with photos, but with a deeper connection to the mountains. Can't wait to trek again with Rara Treks!",
        marginTop: "mt-0",
      },
      {
        id: 2,
        name: "Priya Sharma",
        trek: "Everest Base Camp",
        rating: 5,
        avatar: "/assets/2.png",
        review:
          "The Everest Base Camp trek with Rara Treks was absolutely phenomenal! The organization was flawless, our guide Pemba was exceptional, and the entire team made sure we were comfortable and safe throughout the journey. The views were spectacular and the experience life-changing. Highly recommend Rara Treks for anyone looking for an authentic Himalayan adventure!",
        marginTop: "mt-2",
      },
      {
        id: 3,
        name: "James Wilson",
        trek: "Annapurna Circuit",
        rating: 4,
        avatar: "/assets/3.png",
        review:
          "Amazing trek through the Annapurna region! Rara Treks provided excellent service from start to finish. The accommodations were better than expected, our guide was knowledgeable about local culture and flora/fauna, and the itinerary was well-paced. Only minor issue was weather delays, but that's nature! Would definitely book with them again.",
        marginTop: "mt-4",
      },
    ],
  },
};

export default trekDataApiResponse;

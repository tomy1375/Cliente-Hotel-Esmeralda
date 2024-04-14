const dataRooms = [
    {
       id: 1,
       name: "Junior Suite",
       sleeps: 2,
       bedType: "1 King",
       description: "Sleeps 2 | 1 King",
       images: [
         "https://cdn.builder.io/api/v1/image/assets/TEMP/804ea7ba03add9a33deb527f8305788d8627d2eefc9ac36a2cdce6948d7bf35f?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&",
         "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         
         "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       ],
       services: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at cursus pellentesque, nisl eros pellentesque quam, a faucibus nisl nunc id nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed id nisl vitae nisl mattis mollis. Donec sit amet nulla at nisi pretium aliquet. Nulla facilisi. Donec id nisl vitae nisl mattis mollis. Donec sit amet nulla at nisi pretium aliquet. Nulla facilisi.",
       type: "Standard King",
       capacity: 2,
       beds: [
         "King",
         "Double"
       ],
       price: 120,
       "sitting area": true,
       "dining table": true,
       wifi: false,
       "TV cable": false,
       phone: false,
       Url: "https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183_640.jpg"
    },
    {
       id: 2,
       name: "Standart King",
       sleeps: 4,
       bedType: "2 Kings",
       description: "Sleeps 4 | 2 Kings",
       images: [
         "https://cdn.builder.io/api/v1/image/assets/TEMP/804ea7ba03add9a33deb527f8305788d8627d2eefc9ac36a2cdce6948d7bf35f?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&",
         "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         "https://images.unsplash.com/photo-1590490359854-dfba19688d70?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       ],
       services: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at cursus pellentesque, nisl eros pellentesque quam, a faucibus nisl nunc id nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed id nisl vitae nisl mattis mollis. Donec sit amet nulla at nisi pretium aliquet. Nulla facilisi. Donec id nisl vitae nisl mattis mollis. Donec sit amet nulla at nisi pretium aliquet. Nulla facilisi.",
       type: "Standard King",
       capacity: 2,
       beds: [
         "King",
         "Double"
       ],
       price: 400,
       "sitting area": true,
       "dining table": true,
       wifi: false,
       "TV cable": false,
       phone: false,
       Url: "https://statics.forbesargentina.com/2024/01/crop/65a6adce1592f__822x460.webp"
    },
    {
       id: 3,
       name: "Superior King",
       sleeps: 4,
       bedType: "2 Kings",
       description: "Sleeps 4 | 2 Kings",
       images: [
         "https://cdn.builder.io/api/v1/image/assets/TEMP/804ea7ba03add9a33deb527f8305788d8627d2eefc9ac36a2cdce6948d7bf35f?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&",
         "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         "https://cdn.builder.io/api/v1/image/assets/TEMP/0a5830317aa225df91a3613d405a821242d400c267a79b794f84f94f9f6e26f6?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&",
       ],
       services: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at cursus pellentesque, nisl eros pellentesque quam, a faucibus nisl nunc id nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed id nisl vitae nisl mattis mollis. Donec sit amet nulla at nisi pretium aliquet. Nulla facilisi. Donec id nisl vitae nisl mattis mollis. Donec sit amet nulla at nisi pretium aliquet. Nulla facilisi.",
       type: "Standard King",
       capacity: 2,
       beds: [
         "King",
         "Double"
       ],
       price: 1000,
       "sitting area": true,
       "dining table": true,
       wifi: false,
       "TV cable": false,
       phone: false,
       Url: "https://content.r9cdn.net/rimg/himg/60/f3/2a/leonardo-2677892-parksuite_003_O-061800.jpg?crop=true&width=500&height=350"
    },
    {
       id: 4,
       name: "Presidential Suite",
       sleeps: 4,
       bedType: "2 Kings",
       description: "Sleeps 4 | 2 Kings",
       images: [
         "https://cdn.builder.io/api/v1/image/assets/TEMP/804ea7ba03add9a33deb527f8305788d8627d2eefc9ac36a2cdce6948d7bf35f?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&",
         "https://cdn.builder.io/api/v1/image/assets/TEMP/0a5830317aa225df91a3613d405a821242d400c267a79b794f84f94f9f6e26f6?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&",
         "https://plus.unsplash.com/premium_photo-1661963080918-263cf79261f9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       ],
       services: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at cursus pellentesque, nisl eros pellentesque quam, a faucibus nisl nunc id nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed id nisl vitae nisl mattis mollis. Donec sit amet nulla at nisi pretium aliquet. Nulla facilisi. Donec id nisl vitae nisl mattis mollis. Donec sit amet nulla at nisi pretium aliquet. Nulla facilisi.",
       type: "Standard King",
       capacity: 2,
       beds: [
         "King",
         "Double"
       ],
       price: 1800,
       "sitting area": true,
       "dining table": true,
       wifi: true,
       "TV cable": false,
       phone: false,
       Url: "https://www.swissotel.com/assets/0/92/2119/2178/2217/2219/6442451722/83eb355a-2f1c-49d8-ad51-1ccce3b52b33.jpg"
    }
   ];
   
   export default dataRooms;
   
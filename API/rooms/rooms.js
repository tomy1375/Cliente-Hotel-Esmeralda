const rooms = [
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
       name: "Deluxe Suite",
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
       Url: "https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183_640.jpg"
    },
    {
       id: 3,
       name: "Executive Suite",
       sleeps: 6,
       bedType: "3 Kings",
       description: "Sleeps 6 | 3 Kings",
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
       Url: "https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183_640.jpg"
    },
    {
       id: 4,
       name: "Presidential Suite",
       sleeps: 8,
       bedType: "4 Kings",
       description: "Sleeps 8 | 4 Kings",
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
       Url: "https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183_640.jpg"
    }
   ];
   
   export default rooms
   
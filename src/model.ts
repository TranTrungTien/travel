export type IPost = {
  id: number;
  title: string;
  time: string;
  category: number;
  author: string;
  sections: {
    title: string;
    content: string;
    image: string;
  }[];
  comments: {
    author: string;
    time: string;
    content: string;
  }[];
};

export const posts: IPost[] = [
  {
    id: 1,
    title: "17+ Địa điểm du lịch Lạng Sơn thú vị nhất không thể bỏ qua",
    time: "12/12/2015",
    category: 21,
    author: "Admin",
    sections: [
      {
        title: "Các địa điểm du lịch Lạng Sơn gắn liền với lịch sử",
        content: `Đây là những câu mở đầu bài ca dao quen thuộc mà trong số chúng ta, ai cũng ít nhất đã từng nghe qua một lần. Chỉ bằng 2 câu đã gợi lên nét đẹp quyến rũ, kỳ thú của xứ Lạng, khiến du khách nào cũng muốn một lần được ghé thăm vùng đất với các địa điểm du lịch Lạng Sơn nổi tiếng trong những trang sách sử và trong những câu ca truyền miệng. `,
        image:
          "https://statics.vinpearl.com/Anh%201%20dia%20diem%20du%20lich%20lang%20son.jpg",
      },
      {
        title: "Thành nhà Mạc",
        content: `Thành nhà Mạc là quần thể kiến trúc quân sự được xây dựng vào thế kỉ XVI, dưới thời phong kiến Việt Nam, dùng để chắn con đường độc đạo từ ải Bắc xuống phía Nam. Hiện nay, thành nhà Mạc chỉ còn lại đoạn tường dài 300m với những khối đá lớn phủ đầy rong rêu.`,
        image:
          "https://statics.vinpearl.com/Anh%202%20dia%20diem%20du%20lich%20lang%20son.jpg",
      },
      {
        title: "Thành cổ Lạng Sơn",
        content: `Thành cổ Lạng Sơn nằm tại phường Chi Lăng, Lạng Sơn và là một trong những di tích lịch sử cấp Quốc gia. Nơi đây từng là trung tâm chính trị, kinh tế, văn hoá của Lạng Sơn với các hoạt động giao thương sôi nổi.`,
        image:
          "https://statics.vinpearl.com/thanh%20co%20lang%20son_1624075107.jpg",
      },
      {
        title: "Núi Tô Thị",
        content: `Núi Tô Thị hay còn gọi là núi Vọng Phu nằm ở xã Tam Thanh, Lạng Sơn. Tương truyền ngày xưa, có sự tích nàng Tô Thị bồng con chờ chồng đi đánh giặc trở về. Chờ mãi không thấy bóng dáng chồng, hai mẹ con nàng hoá đá. Ngày nay trên đỉnh núi Tô Thị có một tảng đá tự nhiên với hình dạng khá giống người phụ nữ bế con, nên được người đời đặt tên là núi Vọng Phu như một biểu tượng cho tấm lòng thuỷ chung son sắt của phụ nữ Việt.`,
        image:
          "https://statics.vinpearl.com/Anh%204%20dia%20diem%20du%20lich%20lang%20son.jpg",
      },
      {
        title: "Ải Chi Lăng",
        content: `Lạng Sơn có gì khiến du khách phải mê đắm đến thế? Hãy thử một lần du lịch Chi Lăng, Lạng Sơn để tìm kiếm câu trả lời. Ải Chi Lăng là cửa ải lịch sử tiêu biểu của Lạng Sơn, nằm tại xã Chi Lăng. Xưa kia, khu vực này được coi là tường chắn của Thăng Long để ngăn chặn những cuộc viễn chinh phương Bắc.`,
        image:
          "https://statics.vinpearl.com/Anh%205%20dia%20diem%20du%20lich%20lang%20son.jpg",
      },
      {
        title: "Chùa - động Tam Thanh",
        content: `Quần thể chùa Tam Thanh nổi tiếng là địa điểm du lịch Lạng Sơn hấp dẫn và kì bí với hệ thống 3 hang động lớn. Trong đó, hang động Tam Thanh là lớn nhất và đẹp nhất. Bên trong hang động là những lớp thạch nhũ với hình thù đa dạng, sinh động như cây Ngô Đồng, Tiên Ông... cùng vòm động cao, thoáng đãng.

Sâu hơn nữa trong động Tam Thanh là hồ Âm Ty, nơi du khách có thể chiêm ngưỡng vẻ đẹp tự nhiên của hồ nước trong vắt, không bao giờ cạn. Động Tam Thanh còn mang đến nhiều kiệt tác thiên nhiên khác như cửa thông thiên, cổng trời...vô cùng đẹp và huyền ảo.`,
        image:
          "https://statics.vinpearl.com/Anh%207%20dia%20diem%20du%20lich%20lang%20son.jpg",
      },
    ],
    comments: [],
  },
  {
    id: 2,
    title: "Kinh nghiệm du lịch Lạng Sơn: nên ở đâu, đi lại, ăn uống, vui chơi",
    time: "12/12/2015",
    category: 21,
    author: "Admin",
    sections: [
      {
        title: "Thời gian lý tưởng đi du lịch Lạng Sơn là khi nào?",
        content: `Khi du lịch Lạng Sơn, bạn cần chú ý hạn chế đi vào khoảng thời gian mưa bão từ tháng 5 đến tháng 7. Các du khách nên chọn đi du lịch Lạng Sơn vào thời điểm: 

Tháng giêng (âm lịch): Thời gian này có nhiều lễ hội thú vị diễn ra như lễ hội chùa Tam Thanh, lễ hội đầu pháo Kỳ Lừa …
Cuối tháng 8 đầu tháng 9 sẽ có đặc sản “na đu dây” Chi Lăng - loại na được trồng trên núi đá, quả to, nhiều thịt và rất ngọt
Cuối tháng 7 đến cuối tháng 11: lúc này những cánh đồng lúa Bắc Sơn sẽ nhuộm vàng cả một góc trời, mùi lúa thơm lan tỏa khắp không gian và chụp ảnh cũng rất đẹp nữa
Mùa đông: bạn sẽ được ngắm tuyết rơi trên đỉnh Mẫu Sơn`,
        image: "https://statics.vinpearl.com/du-lich-lang-son-1.jpg",
      },
      {
        title: "",
        content: `Lạng Sơn cách thủ đô Hà Nội khoảng 180 km về hướng Đông Bắc, được nối với nhau bằng con đường cao tốc Hà Nội - Lạng Sơn nên giao thông đi lại thuận tiện, dễ dàng. Các du khách có thể lựa chọn di chuyển đến Lạng Sơn theo 3 cách sau: 

Du lịch Lạng Sơn bằng xe khách: Luôn có xe khách đi từ Hà Nội đến Lạng Sơn tại bến xe Mỹ Đình, Gia Lâm, Lương Yên. Mức giá vé dao động từ 100.000 - 170.000 VNĐ/người/chiều. Thời gian di chuyển từ 4 - 5 tiếng. 
Du lịch Lạng Sơn bằng tàu hỏa: Bạn có thể lựa chọn tuyến Lạng Sơn - Đồng Đăng, giá vé 80.000 - 115.000 VNĐ/người, khởi hành lúc 6h hoặc 9h45 từ Ga Hà Nội. Đây là cách di chuyển hợp lý dành cho những ai dễ say xe. 
Du lịch Lạng Sơn bằng phương tiện cá nhân: Nếu lựa chọn đi bằng xe máy, cung đường Hà Nội – Bắc Ninh – Bắc Giang – Lạng Sơn hoặc theo QL5 rồi vào đường 1A là cách di chuyển dễ dàng nhất. Còn nếu lựa chọn đi bằng ô tô, bạn có thể đi từ Hà Nội, qua cầu Phù Đổng, chạy thẳng theo cao tốc Hà Nội - Lạng Sơn là đến nơi nhé. `,
        image: "https://statics.vinpearl.com/du-lich-lang-son-2.jpg",
      },
      {
        title: "Các phương tiện đi lại ở Lạng Sơn",
        content: `Taxi:
Taxi luôn là phương tiện di chuyển phổ biến ở nhiều tỉnh thành, đặc biệt những khu du lịch như Lạng Sơn. Bạn có thể dễ dàng bắt được taxi tại các địa điểm du lịch, tuy nhiên tại đây vẫn chưa có các ứng dụng đặt xe công nghệ nên bạn cần hỏi thật kỹ giá trước khi lên xe. 

Thuê xe máy:
Di chuyển bằng xe máy cũng là một ý kiến hay. Bạn sẽ vừa chủ động được thời gian đi lại, tiết kiệm chi phí hơn mà quan trọng là được tận hưởng vẻ đẹp Lạng Sơn một cách trọn vẹn nhất. Bạn có thể hỏi nhân viên khách sạn, homestay, nhà nghỉ mình ở để biết được những địa điểm thuê xe máy rẻ, giá cả hợp lý nhất. `,
        image: "",
      },
      {
        title: "Du lịch Lạng Sơn nên ở đâu?",
        content: `Việc lựa chọn một chỗ nghỉ dưỡng khi du lịch Lạng Sơn cũng là điều rất quan trọng mà các du khách cần lưu tâm tới. Gần đây, du lịch Lạng Sơn phát triển mạnh nên hệ thống homestay, nhà nghỉ, khách sạn phát triển mạnh, đa dạng và phong phú. `,
        image: "https://statics.vinpearl.com/du-lich-lang-son-3.jpg",
      },
      {
        title: "Chùa Tam Thanh - vẻ đẹp hoang sơ, cổ kính",
        content: `Chùa Tam Thanh là một trong những địa điểm du lịch Lạng Sơn đặc biệt. Ngôi chùa mang nét đẹp kiến trúc cổ kính, bao gồm 3 hang động lớn là Nhất Thanh, Tam Thanh và Nhị Thanh. 

Mỗi hang động đều rất sâu, càng khám phá vào bên trong, các du khách sẽ được chiêm ngưỡng nhiều điều ký thú với các di tích cổ từ hàng trăm năm trước. `,
        image: "https://statics.vinpearl.com/du-lich-lang-son-6.jpg",
      },
      {
        title:
          "Ải Chi Lăng - di tích lịch sử gắn liền với thời kỳ chống quân xâm lược",
        content: `Cửa Ải Chi Lăng từng là bức tường thành vững chắc của kinh thành Thăng Long giúp ngăn đường tiến công của quân xâm lược phía Bắc. Với hai dãy núi cao sừng sững dọc 2 bên đường, nơi đây thực sự sẽ khiến bạn trầm trồ khi ghé thăm bởi những câu chuyện và khí thế hào hùng còn mãi. `,
        image: "https://statics.vinpearl.com/du-lich-lang-son-7.jpg",
      },
      {
        title: "Hang Gió - hang đá quy mô lớn",
        content: `Du lịch Lạng Sơn mà không thám hiểm các hang động thì thực sự uổng phí. Một trong những hang động đá lớn nhất Lạng Sơn chính là Hang Gió. Chiều dài hang dài tới cả trăm mét, rộng 50 - 70m, cao 30 - 40m chắc chắn sẽ làm thỏa mãn các tín đồ thám hiểm. `,
        image: "",
      },

      {
        title: "Đền Mẫu Đồng Đăng ",
        content: `Đền Mẫu Đồng Đăng là nơi thờ Phật và mẫu thượng ngàn. Vào ngày mồng 10 tháng Giêng hàng năm, tại đây thường diễn ra lễ hội các dân tộc xứ Lạng. Trong lễ hội, các du khách sẽ được trải nghiệm nhiều trò chơi dân gian, tìm hiểu văn hóa các dân tộc tại đây. `,
        image:
          "https://statics.vinpearl.com/du-lich-lang-son-1-ngay-27_1626417458.jpg",
      },
    ],
    comments: [],
  },
  {
    id: 43,
    title: "Từ A-Z kinh nghiệm du lịch Lạng Sơn - nàng thơ núi rừng Đông Bắc",
    time: "12/12/2015",
    category: 22,
    author: "Admin",
    sections: [
      {
        title:
          "Từ A-Z kinh nghiệm du lịch Lạng Sơn - nàng thơ núi rừng Đông Bắc",
        content: `Lạng Sơn là một tỉnh miền núi cách thủ đô Hà Nội hơn 180km, có khí hậu mát mẻ quanh năm, sơn thuỷ hữu tình, cảnh sắc thay đổi theo mùa. Có lẽ bởi những đặc điểm ấy, nơi đây luôn là điểm đến thu hút một lượng lớn du khách bất kỳ thời điểm nào trong năm. Thậm chí, nếu may mắn đến Lạng Sơn vào mùa lạnh, bạn có thể nhìn thấy những đợt tuyết nhẹ nhàng phủ kín đất trời.`,
        image:
          "https://ik.imagekit.io/tvlk/blog/2021/09/kinh-nghiem-du-lich-lang-son-1-1024x683.jpg?tr=dpr-2,w-675",
      },
      {
        title: "Di chuyển đến Lạng Sơn",
        content: `Nếu ở các tỉnh lân cận các bạn có thể chọn xe khách hoặc phương tiện cá nhân để đến Lạng Sơn. Trong trường hợp xuất phát từ Hà Nội thì có những lựa chọn sau đây

Xe khách: có rất nhiều tuyến Hà Nội-Lạng Sơn ở nhiều khung giờ.
Xe gắn máy: thỏa sức ngắm cảnh dọc đường đi, nhưng bị ảnh hưởng bởi thời tiết.
Tàu hoả: an toàn và cũng có thể thưởng thú khung cảnh trên đường đi.
Máy bay: đây là lựa chọn tiết kiệm thời gian nhất cho những bạn xuất phát từ địa điểm cách quá xa Lạng Sơn như miền Trung, miền Nam. Tuy nhiên, hiện tại các hãng hàng không chỉ phát triển các chuyến bay đến Hà Nội, nên bạn cần đặt vé máy bay đến Hà Nội rồi di chuyển tiếp đến Lạng Sơn được.`,
        image:
          "https://ik.imagekit.io/tvlk/blog/2021/09/kinh-nghiem-du-lich-lang-son-2.jpg?tr=dpr-2,w-675",
      },
      {
        title: "Phố Kỳ Lừa",
        content: `Làm sao bỏ qua được Phố Kỳ Lừa nổi tiếng trong bao câu cao dao tục ngữ. Phố Kỳ Lừa nằm gần cửa khẩu Đồng Đăng, là địa danh “danh bất hư truyền” khi đến xứ Lạng mà bạn nhất định phải ghé thăm. Nơi đây là khu mua bán sầm uất với đầy đủ các mặt hàng, mang trong mình hơi thở đặc trưng của con người xứ Lạng. Đây cũng là nơi thấm nhuần văn hoá bản địa, vì thế tham quan phố Kỳ Lừa làm để nhìn thấy các giá trị lâu đời giao thoa với giao thương hiện đại.`,
        image: "",
      },
      {
        title: "Chùa Tam Thanh",
        content: `Chùa Tam Thanh là địa điểm du lịch tâm linh có thể nói là nổi bật nhất Lạng Sơn, chùa nằm trong Động Tam Thanh, không gian mát mẻ bao trùm, núi non trùng điệp hiểm trở, sự uy nghiêm giữa đất trời và thiên nhiên khiến ngôi chùa nhuốm màu sắc tâm linh diệu kì. Chùa Tam Thanh khiến bạn như vượt thời gian trở về quá khứ với nhiều dấu ấn văn hoá - lịch sử được lưu giữ nơi đây.`,
        image:
          "https://ik.imagekit.io/tvlk/blog/2021/09/kinh-nghiem-du-lich-lang-son-3.jpg?tr=dpr-2,w-675",
      },
    ],
    comments: [],
  },
  {
    id: 3,
    title: "Khám phá 10 địa điểm du lịch hấp dẫn du khách tại Lạng Sơn",
    time: "12/12/2015",
    author: "Admin",
    category: 22,
    sections: [
      {
        title: "Khám phá 10 địa điểm du lịch hấp dẫn du khách tại Lạng Sơn",
        content: `Đỉnh Mẫu Sơn là địa điểm thu hút rất nhiều khách du lịch ghé thăm với không khí trong lành, thoáng đãng và phong cảnh thiên nhiên đẹp như tranh vẽ.

Đây là ngọn núi quanh năm được mây bao phủ, mang đến khí hậu mát mẻ, dễ chịu. Đặc biệt vào thời điểm cuối mùa đông, bạn có thể sẽ được ngắm tuyết rơi khi đến đây du lịch,...`,
        image:
          "https://cdn.tgdd.vn/Files/2021/06/23/1362581/kham-pha-10-dia-diem-du-lich-hap-dan-du-khach-tai-lang-son-202112300945167597.jpg",
      },
      {
        title: "Chùa Tam Thanh",
        content: `Chùa Tam Thanh thu hút nhiều du khách bởi vẻ đẹp cổ kính, độc đáo. Bên trong chùa là 3 hang động lớn với tên gọi Nhất Thanh, Nhị Thanh và Tam Thanh. Nơi đây không chỉ là một danh lam thắng cảnh mà còn là địa điểm tâm linh mang nhiều ý nghĩa đối với người dân nơi đây.`,
        image:
          "https://cdn.tgdd.vn/Files/2021/06/23/1362581/kham-pha-10-dia-diem-du-lich-hap-dan-du-khach-tai-lang-son-202106231314183809.jpg",
      },
      {
        title: "Thác Đăng Mò",
        content: `Đến với Thác Đăng Mò, bạn sẽ cảm nhận được bầu không khí trong lành và phong cảnh thiên nhiên đầy thơ mộng. Những tảng đá phủ rêu xanh, dòng nước trắng xóa và những cành cây dọc bên bờ, tất cả đã tạo nên vẻ đẹp đầy bí ẩn của núi rừng Lạng Sơn.`,
        image:
          "https://cdn.tgdd.vn/Files/2021/06/23/1362581/kham-pha-10-dia-diem-du-lich-hap-dan-du-khach-tai-lang-son-202106231316139495.jpg",
      },
      {
        title: "Đền Mẫu Đồng Đăng",
        content: `Đền Mẫu Đồng Đăng là một trong những địa điểm hấp dẫn du khách tại Lạng Sơn. Đây là một ngôi đền thiêng liêng, mang ý nghĩa tâm linh sâu sắc đối với người dân địa phương. Khi đến đây vào những ngày lễ hội, bạn còn được thưởng thức nhiều trò chơi đặc sắc như múa sư tử, võ dân tộc,...`,
        image:
          "https://cdn.tgdd.vn/Files/2021/06/23/1362581/kham-pha-10-dia-diem-du-lich-hap-dan-du-khach-tai-lang-son-202106231317590552.jpg",
      },
    ],
    comments: [],
  },
  {
    id: 4,
    title:
      "Con đường hạnh phúc Hà Giang: ‘Bản sắc’ của núi rừng Đông Bắc – HaloTravel",
    time: "12/12/2015",
    author: "Admin",
    category: 23,
    sections: [
      {
        title:
          "Con đường hạnh phúc Hà Giang: ‘Bản sắc’ của núi rừng Đông Bắc – HaloTravel",
        content: `Đường hạnh phúc là con đường chạy từ Hà Giang qua cao nguyên đá Đồng Văn và đình Mã Pì Lèng rồi đến Mèo Vạc. Sở dĩ có tên là Hạnh phúc vì những ý nghĩa mà nó mang lại. Trước đây, đường chỉ là dải mòn gập gềnh dành cho người đi bộ, vì muốn phát triển kinh tế – xã hội nên đã có các chính sách tiến hành thi công. Nhờ sự xuất hiện của đường nhựa trải dài mà bộ mặt của cao nguyên đã thay đổi rất nhiều, đời sống của con người ngày một tốt lên.`,
        image:
          "https://halotravel.vn/wp-content/uploads/2022/07/con-duong-hanh-phuc-ha-giang.jpg",
      },
      {
        title: "Cách di chuyển đến đường hạnh phúc Hà Giang",
        content: `Đường hạnh phúc chính là tên gọi của đường quốc lộ 4C nối từ cột mốc số 0 thành phố Hà Giang đi qua các huyện Yên Minh, Quản Bạ, Đồng Văn và Mèo Vạc. Chiều dài của đường kéo dài đến 200km, uốn lượn theo các sườn đồi.

Tính di chuyển từ Hà Nội, điểm cách nhau khoảng 263km, mất hơn 6h để di chuyển. Du khách có thể chọn hai hình thức là đi phượt hoặc đi xe khách, xe du lịch lên Hà Giang. Nếu đi phượt bạn dễ dàng sử dụng Google Map vì đường đi không quá khó khăn. Nếu đi bằng hình thức xe khách thì có thể đi xe giường nằm mua vé tại bến Mỹ Đình và dừng tại Thành phố Hà Giang.`,
        image:
          "https://halotravel.vn/wp-content/uploads/2022/07/con-duong-hanh-phuc-ha-giang-2.jpg",
      },
      {
        title: "Có gì tại Con đường hạnh phúc Hà Giang?",
        content: `Đến với Con đường hạnh phúc là một hành trình cực kì đặc biệt dành cho phượt thủ và những người đam mê du lịch. Đến đây, bạn không chỉ được ngắm nhìn vẻ đẹp của một Hà Giang đầy kì thú. Mà còn có cơ hội để học hỏi thêm những điều mới lạ trong chuyến đi của mình.

Mỗi mùa sang, một vẻ đẹp
Đường hạnh phúc uốn lượn mình giữa thiên nhiên đất trời Hà Giang, vì vậy vào mỗi mùa qua, nơi đây lại khoác cho mình một chiếc áo mới, lúc xanh mơn mởn, lúc lại nhuộm trắng cả bầu trời hoa, lúc lại mềm mại trải vàng mùa lúa chín.`,
        image:
          "https://halotravel.vn/wp-content/uploads/2022/07/con-duong-hanh-phuc-ha-giang-3.jpg",
      },
    ],
    comments: [],
  },
  {
    id: 5,
    title: "Hẻm Tu Sản: ‘Đệ nhất hùng quan’ nơi địa đầu Tổ quốc",
    time: "12/12/2015",
    author: "Admin",
    category: 23,
    sections: [
      {
        title: " Định vị tọa độ của hẻm Tu Sản",
        content: `Người ta gọi hẻm Tu Sản là “đệ nhất hùng quan” bởi nơi đây sở hữu vách đá cao ấn tượng lên đến 700 – 800m cùng chiều dài lên đến 1.7km. Đây chính là sản phẩm kỳ diệu của tạo hóa từ hàng triệu năm trước, khi Trái Đất vẫn được bao phủ bởi đại dương mênh mông. 

`,
        image:
          "https://halotravel.vn/wp-content/uploads/2022/07/hem-tu-san-10.jpg",
      },
      {
        title: "Du lịch hẻm Tu Sản mùa nào là hợp lý nhất?",
        content: `Bất kỳ thời điểm nào trong năm, nơi đây cũng đều mang theo một vẻ đẹp động lòng người và một sức hút khó chối từ. Tuy nhiên, thời điểm đẹp nhất để khám phá Hà Giang nói riêng và tham quan hẻm tu Sản nói chung là vào khoảng độ Xuân về (từ tháng 1 đến tháng 3). 

Đây là khi sắc hoa mận, hoa đào nở rộ cả một vùng trời Hà Giang, cũng là thời điểm dòng sông Nho Quế hiền hòa khoác lên mình tấm áo xanh ngọc đẹp hơn bao giờ hết. Dòng nước trong veo, không chút gợn sóng là quá lý tưởng để bạn ngồi trên chiếc thuyền nhỏ khám phá con hẻm Tu Sản kỳ vĩ. `,
        image:
          "https://halotravel.vn/wp-content/uploads/2022/07/hem-tu-san-6.jpg",
      },
      {
        title: "Cách di chuyển đến hẻm Tu Sản",
        content: `Di chuyển khám phá con hẻm kỳ vĩ này có lẽ là một trong những chuyến đi để đời đối với những đôi chân đam mê “xê dịch”. Bạn sẽ được uốn mình theo từng con dốc, từng cung đèo để đến được Cổng trời Quản Bạ, sau đó là Đồng Văn, trước khi sa vào “lưới tình” của con đèo Mã Pí Lèng, dòng sông Nho Quế màu ngọc bích bình yên và hẻm vực Tu Sản ảo diệu, kỳ vĩ.

Từ ngay trên đỉnh Mã Pí Lèng, bạn đã có thể chiêm ngưỡng được trọn vẹn dòng sông Nho Quế cùng hẻm vực Tu Sản rồi. Tuy nhiên, bạn cũng có thể thuê người dân bản địa chở xuống các bến thuyền để khám phá du lịch hẻm Tu Sản bằng đường sông.

`,
        image:
          "https://halotravel.vn/wp-content/uploads/2022/07/hem-tu-san-8.jpg",
      },
      {
        title: "Khám phá vẻ đẹp của ‘đệ nhất Hùng Quan’ của Việt Nam",
        content: `Ai đã từng đặt chân đến Hà Giang một lần chắc chắn sẽ bị thu hút ngay lập tức bởi cảnh sắc núi non hùng vĩ. Hòa quyện vào bức tranh thiên nhiên ấy là những nét chấm phá bình dị được tạo nên bởi bàn tay con người. Đó là những mái nhà ẩn hiện nơi sườn núi, là những loài hoa nở rộ bốn mùa tràn ngập sắc hương,… là một khung cảnh đẹp động lòng người, khiến bất kỳ ai cũng phải ngẩn ngơ, lưu luyến.`,
        image:
          "https://halotravel.vn/wp-content/uploads/2022/07/hem-tu-san-15.jpg",
      },
    ],
    comments: [],
  },
  {
    id: 6,
    title: "Địa điểm ăn uống ngon nhất Lạng Sơn",
    time: "12/12/2015",
    author: "Admin",
    category: 1,
    sections: [
      {
        title: "Khâu nhục",
        content: `Khâu nhục còn gọi là Nằm khâu, là món ăn có nguồn gốc từ Trung Quốc. Khâu nhục được du nhập vào Việt Nam qua sự biến tấu của người dân tộc Tày, Nùng, và qua thời gian đã trở thành món ăn Đặc sản nổi tiếng của Lạng Sơn, được dùng trong những dịp gia đình có chuyện vui như lễ Tết, cưới hỏi…Theo truyền thống, khâu nhục được chế biến khá cầu kì từ thịt ba chỉ sau khi đã được ướp kĩ các loại gia vị và chưng cách thủy trong thời gian dài.



Nguyên liệu chính được dùng là thịt ba chỉ, theo những người có kinh nghiệm thì thịt ngon nhất không nên quá béo, nếu không sẽ ảnh hưởng đến chất lượng món ăn. Bên cạnh đó, còn cần có các loại gia vị như húng lìu, Ngũ vị hương, Địa liền, mật ong, rượu, dấm, xì dầu… Thịt ba chỉ sau khi luộc sơ được tẩm gia vị, sau đó dùng tăm tre chọc thật kĩ lớp bì để bì có khả năng hút nước cho mềm, đồng thời loại bỏ bớt lớp mỡ dưới da. Sau đó đem thịt đi quay, vừa quay vừa phết mật ong lên cho vàng bì, hoặc cũng có thể cho thịt vào chảo mỡ đảo cho vàng miếng thịt rồi vớt ra để nguội.



Khoai môn thái miếng, chiên vàng rồi bày lên đĩa. Phía dưới lớp khoai là lớp rau muối mặn được làm từ lá tàu soi băm nhỏ, trộn đều với tương tàu, xì dầu, húng lìu, tỏi. Sau đó thái thịt thành từng miếng khoảng 1,5 cm, úp bát to vào, lật lại để nguyên đĩa rồi xếp từng bát vào nồi chưng cách thủy trong khoảng thời gian từ 4-5 tiếng cho thịt chín và mềm nhừ. Khi ăn thì lật úp bát thịt ra đĩa, để phần da của thịt được bày lên trên, nếu có màu vàng đều cùng hương thơm đặc trưng là đã đạt yêu cầu. Khâu nhục có thể ăn với cơm hoặc xôi, nhưng ngon nhất vẫn là ăn với bánh gật gù.`,
        image: "https://toplist.vn/images/800px/khau-nhuc-540122.jpg",
      },
      {
        title: "Phở chua Lạng Sơn",
        content: `Đặc sản xứ Lạng này được chế biến khá cầu kỳ và có hương vị vô cùng hấp dẫn. Phở chua Lạng Sơn phải ăn nhẩn nha mới thưởng thức hết hương vị đặc biệt của nó. Hiện nay, phở chua có bán ở một số vùng miền núi phía Bắc, nhưng chỉ có sản phẩm của Thất Khê, Lạng Sơn, là có tiếng hơn cả.



Phở chua gồm hai phần: nguyên liệu khô và phần nước. Phần khô trước hết phải kể đến bánh phở. Cũng vẫn là thứ bánh phở quen thuộc nhưng cái khác ở đây là bánh phở được làm se lại sao cho vừa dẻo vừa dai. Tiếp đó là món khoai tây thái chỉ và miếng doang được thoa qua mỡ sao cho thật giòn và vàng rộm lên. Gan lợn thái mỏng bằng nửa lòng bàn tay rán cháy cạnh. Thịt lợn ba chỉ loại ngon và dạ dày lợn đem quay trong chảo mỡ. Riêng vịt quay thì nên chọn mua tại các nhà hàng chuyên nghiệp nổi tiếng ở Thất Khê. Phần nước phở gồm: nước báng tỏi, dấm, đường, mì chính…Chính thứ nước hỗn hợp này làm cho người ăn không không cảm thấy ngấy. Còn nước lèo chính là thứ nước múc từ bụng con vịt quay, vừa có vị ngậy của mỡ vịt, vừa thơm phức nhờ những gia vị ướp trước khi quay. Toàn bộ phần nguyên liệu được chuẩn bị từ trước và chờ đến khi khách gọi mới bắt đầu trộn. Khâu trộn là khâu cuối quyết định sự thành công của món phở chua. Phải trộn lượng nước vừa đủ sao cho nguyên liệu không bị nát mà gia vị vẫn thấm đều.`,
        image: "https://toplist.vn/images/800px/pho-chua-banh-duc-8798.jpg",
      },
      {
        title: "Bánh cuốn trứng Lạng Sơn",
        content: `Bánh cuốn trứng cũng chọn những hạt gạo tẻ trắng ngần xay mịn làm bột. Sau đó, người ta đem thứ tinh bột thơm mùi đồng ruộng này hòa với nước thành một hỗn hợp không quá đặc mà cũng không quá loãng như thế sẽ giữ được độ dẻo đặc trưng của bột gạo. Đến lúc ngọn lửa hồng của bếp lò được nổi lên thì người làm bánh khéo léo căng một miếng vải mỏng lên miệng nồi hấp và thoa một lớp mỡ mỏng lên mặt miếng vải để bánh cuốn dễ dàng được lấy ra khi đã chín. Bánh chỉ được làm khi có khách vào ăn, đôi bàn tay thoăn thoắt của người đầu bếp múc từng gáo bột láng thật đều, thật mỏng trên khuôn vải. Khi chiếc bánh trên nồi vừa chín tới, giở nắp vung ra đập vào hai bên của lá bánh hai quả trứng gà, đậy nắp lại một chút, chờ cho lớp lòng trắng đục lại, dính vào mặt bánh còn phần lòng đỏ lúc ấy chỉ cần vừa đủ chín tới độ lòng đào tạo thành lớp bọc mỏng giúp cho quả trứng không bị vỡ là được.



Ngồi quanh bếp than hồng nghe củi gỗ bị đốt cháy nổ tí tách nhâm nhi bát nước vối nóng, thưởng thức bánh cuốn trứng với nước chấm đơn giản là một chén nước thịt kho, lớp nước mỡ thật dày cùng với ít rau sống sẽ thấy xứ Lạng thật bình yên. Điều thú vị hơn là khi ăn bánh người dùng phải đưa miếng bánh vào miệng khéo léo để lòng đỏ trứng vỡ ra trong miệng hòa lẫn với vị béo béo ngậy ngậy, mặn ngọt của nước thịt kho mới thấy hết được sự tinh tế trong ẩm thực của vùng quê này.

`,
        image:
          "https://toplist.vn/images/800px/banh-cuon-trung-lang-son-258504.jpg",
      },
      {
        title: "Bánh mì nướng Lạng Sơn",
        content: `Nhiều người khi nhắc đến Lạng Sơn đều nghĩ ngay tới thịt lợn, thịt vịt nướng hay thứ rượu Mẫu Sơn được nấu bằng chính thứ nước suối chảy trên ngọn núi này. Tuy nhiên, bên cạnh đó, ở xứ Lạng có một món ăn kém may mắn hơn một chút khi nó được ít người biết tới đó là bánh mì nướng dầu hào.



Bánh mì nướng xứ Lạng có đặc trưng rất riêng từ bánh mì tới công thức pha nước chấm, đặc biệt là những món ăn kèm rất đặc biệt. Bánh mì được nướng qua hai công đoạn, đầu tiên là phết dầu nướng cho nóng, sau đó sẽ được phết hỗn hợp dầu hào, mật ong để nướng lại lần hai. Bạn muốn ăn bánh giòn hay không đều có thể nói chủ quán điều chỉnh cho hợp với khẩu vị của mình. Công đoạn nướng diễn ra khoảng 5 - 10 phút, được cắt nhỏ thành những miếng vừa miệng. Những miếng bánh mì ròn tan, có chút óng ánh của dầu hào được phết lên trên trông chúng giống như được phủ một lớp thủy tinh vậy. Khi ăn, thực khách sẽ cảm nhận được vị bùi của dầu hào được phết lên đều đặt lên thân bánh mì. Ngoài ra, để ăn kèm với bánh mì nướng dầu hào, không thể không thiếu thịt xiên nướng, hàm nướng, họng nướng, hoặc dạ dày nướng,... Chúng được ăn kèm với bánh mì rồi nhúng một chút vào thứ nước chấm xền xệt riêng biệt của xứ Lạng.



Nếu một ngày bạn đi đến Lạng Sơn, hãy nghé qua một hàng bánh mì nướng bất kì nào đó để thưởng thức xem bánh mì nơi biên giới có khác gì hay không? Đề cảm nhận món ẩm thực tinh túy nơi xứ Lạng, nơi biên giới xa xôi.`,
        image:
          "https://toplist.vn/images/800px/banh-mi-nuong-lang-son-540673.jpg",
      },
    ],
    comments: [],
  },
  {
    id: 1,
    title: "Top 10 Nhà hàng, quán ăn ngon nhất tỉnh Lạng Sơn",
    time: "12/12/2015",
    author: "Admin",
    category: 2,
    sections: [
      {
        title: "Quán Xuân Sửu",
        content: `Người ta biết đến Quán Xuân Sửu với món bánh áp chao. Bánh áp chao không quá đắt đỏ, là thức bánh bình dị của người dân Lạng Sơn. Món bánh này là một biến tấu thú vị từ thịt vịt. Bánh gồm: vỏ bánh và nhân bánh. Vỏ bánh là bột gạo nếp, gạo tẻ ngâm xay sền sệt, trộn một chút đỗ tương, cho cả khoai môn nạo để tăng thêm độ thơm giòn, tạo nên vị đặc trưng. Bánh áp chao trông từa tựa bánh rán, nhưng sự khác biệt thì ẩn giấu bên trong. Nhân bánh là thịt vịt chuẩn xứ Lạng, tẩm ướp làm sao đó mà rất đậm đà.



Bánh lên đĩa vẫn thật nóng, ăn kèm với nước mắm chua ngọt, ngâm gỏi đu đủ xanh, thêm ít ớt tiêu cay tê tê đầu lưỡi và rổ rau sống xanh mướt chống ngán. Từng miếng bánh màu nâu vàng ruộm, cắn bên ngoài giòn tan, bên trong thơm thơm dẻo dẻo, hòa quyện với vị thịt vịt ngọt béo đặc trưng, lại sần sật sụn xương đã miệng.



Những tối mát trời, hay những ngày se lạnh, quán Xuân Sửu lúc nào cũng chật ních khách. Sẽ thật tuyệt nếu đến quán Xuân Sửu gọi đĩa bánh áp chao và cùng trò chuyện với hội bạn thân.

`,
        image: "https://toplist.vn/images/800px/quan-xuan-suu-389997.jpg",
      },
      {
        title: "Thai Chiang Restaurant",
        content: `Nếu hứng thú với ẩm thực xứ Chùa Vàng - Thái Lan, thì hãy theo gợi ý của Toplist đến với Nhà hàng Thai Chiang. Nhà hàng này hội tụ đủ 3 tiêu chí: "ngon - bổ - rẻ". Đến với nhà hàng, bạn sẽ đến với tinh hoa ẩm thực Thái, bạn sẽ được thưởng thức bữa cơm của người Thái theo phong cách rất Thái.



Nhắc đến món ăn Thái thì thật thiếu sót nếu bỏ quên lẩu Thái. Bạn nghĩ sao với combo lẩu ếch vị Thái? Chỉ 250.000 đồng thôi, khách hàng đã có nồi lẩu siêu ngon dành cho 4 người ăn. Nước lẩu đậm đà, hơi cay cay đầu lưỡi lại thêm ếch chiên ngậy béo, dai mềm. Nhà hàng có rất nhiều món ăn hấp dẫn, phù hợp với không khí bữa ăn gia đình. Bạn có thể thử siêu phẩm bò bít tết của nhà hàng, thịt bò vừa tới, thịt ngọt mềm, nước sốt hơi quánh, màu đẹp mắt, ăn kèm bánh mì. Món ăn này của nhà hàng được các bạn nhỏ đặc biệt yêu thích. Còn dân công sở ghé nhà hàng dành sự yêu mến cho món cơm trắng ăn kèm bò sốt tiêu đen.



Điểm cộng cho nhà hàng chính là chất lượng phục vụ tốt, không gian nhà hàng đẹp mắt. Hơn nữa, nhà hàng có chính sách giao đồ ăn tận nhà cho khách hàng.

`,
        image:
          "https://toplist.vn/images/800px/thai-chiang-restaurant-393173.jpg",
      },
      {
        title: "Manwah Lạng Sơn",
        content: `Đến Lạng Sơn giữa cái không khí se se lạnh của vùng núi cao Việt Bắc, chắc hẳn được ngồi cùng những người bạn thân yêu bên nồi lẩu cay nóng là điều tuyệt vời nhất!



Manwah Lạng Sơn là cửa hàng chuyên về các món lẩu, với 5 vị lẩu đài nguyên bản phục vụ theo khẩu vị của khách hàng. Bên cạnh đó, có hơn 68 món nhúng da dạng và đặc sắc được làm mới mỗi ngày. Manwah còn cung cấp dịch vụ buffet lẩu, giúp cho khách hàng có thể gọi đồ thoải mái mà chỉ một mức giá đã định. Sau khi ăn xong, khách hàng có thể gọi nước uống và đồ tráng miệng ngay tại quán.



Thưởng lẩu luôn là lý do tuyệt vời để có thể ngồi lại bên những người thân yêu. Vậy nên, bất cứ dịp nào có cơ hội đừng quên tới Manwah bạn nhé!`,
        image: "https://toplist.vn/images/800px/manwah-lang-son-695119.jpg",
      },
    ],
    comments: [],
  },
  {
    id: 4324,
    title:
      "Top 10 nhà nghỉ Lạng Sơn đẹp giá rẻ nhất gần trung tâm nên đặt phòng",
    time: "12/12/2015",
    author: "Admin",
    category: 9,
    sections: [
      {
        title: "Nhà nghỉ Dũng Hà Lạng Sơn",
        content: `Nhà nghỉ được trang bị đầy đủ những vật dụng cần thiết, phòng ốc luôn được vệ sinh rất sạch sẽ, không gian thoáng mát. Đặc biệt nhà nghỉ Dũng Hà có chỗ đỗ xe rộng và đậu được cả ô tô. Nhân viên phục vụ luôn nhiệt tình và hỗ trợ mọi khách hàng. Bạn chỉ cần bỏ ra 230.000đ/ đêm một mức giá khá rẻ để thuê phòng.`,
        image:
          "https://i2.wp.com/kenhhomestay.com/wp-content/uploads/2020/02/nha-nghi-lang-son-1.jpg",
      },
      {
        title: "Hùng Hostel Lạng Sơn",
        content: `Hùng Hostel là một nhà nghỉ dành cho những người yêu thích sự đơn giản, mộc mạc. Nơi đây vô cùng thân quen và gần gũi, cảm giác như bạn đang ở trong chính ngôi nhà của mình vậy.`,
        image:
          "https://i3.wp.com/kenhhomestay.com/wp-content/uploads/2020/02/nha-nghi-lang-son-2.jpg",
      },
    ],
    comments: [],
  },
  // {
  //   title: "",
  //   time: "12/12/2015",
  //   author: "Admin",
  //   category: 14,
  //   sections: [
  //     {
  //       title: "",
  //       content: ``,
  //       image: "",
  //     },
  //   ],
  //   comments: [],
  // },
];

export const categories = [
  {
    label: "Đặc sản",
    value: 1,
  },
  {
    label: "Nhà hàng",
    value: 2,
  },
  {
    label: "Quán nước",
    value: 3,
  },
  {
    label: "Cách làm",
    value: 4,
  },
  {
    label: "Trang điểm",
    value: 5,
  },
  {
    label: "Làm tóc",
    value: 6,
  },
  {
    label: "Thời trang",
    value: 7,
  },
  {
    label: "Villa",
    value: 8,
  },
  {
    label: "Nhà nghỉ",
    value: 9,
  },
  {
    label: "Khách sạn",
    value: 10,
  },
  {
    label: "Nội thất",
    value: 11,
  },
  {
    label: "Leo núi",
    value: 12,
  },
  {
    label: "Hang Động",
    value: 13,
  },
  {
    label: "Sông suối",
    value: 14,
  },
  {
    label: "Cắm trại",
    value: 15,
  },
  {
    label: "Sân bóng",
    value: 16,
  },
  {
    label: "Phố đi bộ",
    value: 17,
  },
  {
    label: "Bệnh viện",
    value: 18,
  },
  {
    label: "Cứu hỏa",
    value: 19,
  },
  {
    label: "113",
    value: 20,
  },
  {
    label: "Thành phố Lạng Sơn",
    value: 21,
  },
  {
    label: "Huyện Bắc Sơn",
    value: 22,
  },
  {
    label: "Huyện Bình Gia",
    value: 23,
  },
  {
    label: "Huyện Cao Lộc",
    value: 24,
  },
  {
    label: "Huyện Chi Lăng",
    value: 25,
  },
  {
    label: "Huyện Đình Lập",
    value: 26,
  },
  {
    label: "Huyện Hữu Lũng",
    value: 27,
  },
  {
    label: "Huyện Lộc Bình",
    value: 28,
  },
  {
    label: "Huyện Tràng Định",
    value: 29,
  },
  {
    label: "Huyện Văn Lãng",
    value: 30,
  },
  {
    label: "Huyện Văn Quan",
    value: 31,
  },
];

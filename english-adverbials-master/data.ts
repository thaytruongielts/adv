
import { Question, SessionType } from './types';

export const QUESTIONS: Question[] = [
  // SESSION 1: ONLY & EVEN (20 questions)
  {
    id: 1,
    session: SessionType.ONLY_EVEN,
    vietnamese: "Anh ấy chơi golf kể cả khi trời mưa. (Dùng 'Even' - Vị trí không trang trọng)",
    expectedEnglish: ["He even plays golf in the rain.", "He even plays golf in the rain"],
    type: 'writing'
  },
  {
    id: 2,
    session: SessionType.ONLY_EVEN,
    vietnamese: "Anh ấy chơi golf kể cả khi trời mưa. (Dùng 'Even' - Nhấn mạnh trang trọng vào cụm 'in the rain')",
    expectedEnglish: ["He plays golf even in the rain.", "He plays golf even in the rain"],
    type: 'writing'
  },
  {
    id: 3,
    session: SessionType.ONLY_EVEN,
    vietnamese: "Ngay cả những người mới bắt đầu cũng biết câu trả lời. (Dùng 'Even' - Nhấn mạnh chủ ngữ)",
    expectedEnglish: ["Even the beginners knew the answer.", "Even the beginners knew the answer"],
    type: 'writing'
  },
  {
    id: 4,
    session: SessionType.ONLY_EVEN,
    vietnamese: "Tôi chỉ yêu cầu một ly nước thôi. (Dùng 'Only' - Vị trí không trang trọng)",
    expectedEnglish: ["I only asked for a glass of water.", "I only asked for a glass of water"],
    type: 'writing'
  },
  {
    id: 5,
    session: SessionType.ONLY_EVEN,
    vietnamese: "Chỉ nhân viên mới được phép vào khu vực này. (Dùng 'Only' - Phong cách thông báo chính thức)",
    expectedEnglish: ["Employees only are allowed in this area.", "Employees are allowed in this area only.", "Employees only allowed in this area"],
    type: 'writing'
  },
  {
    id: 6,
    session: SessionType.ONLY_EVEN,
    vietnamese: "Cô ấy chỉ ăn thực phẩm hữu cơ. (Nhấn mạnh vào 'organic food' - Trang trọng)",
    expectedEnglish: ["She eats only organic food.", "She eats only organic food"],
    type: 'writing'
  },
  {
    id: 7,
    session: SessionType.ONLY_EVEN,
    vietnamese: "Ngay cả anh trai tôi cũng nhớ ngày sinh nhật của tôi. (Dùng 'Even' - Nhấn mạnh chủ ngữ)",
    expectedEnglish: ["Even my brother remembered my birthday.", "Even my brother remembered my birthday"],
    type: 'writing'
  },
  {
    id: 8,
    session: SessionType.ONLY_EVEN,
    vietnamese: "Chúng ta chỉ có thời gian cho một ly cà phê nhanh thôi. (Dùng 'Only' - Không trang trọng)",
    expectedEnglish: ["We only have time for a quick coffee.", "We have time for a quick coffee only"],
    type: 'writing'
  },
  {
    id: 9,
    session: SessionType.ONLY_EVEN,
    vietnamese: "Vé chỉ có giá trị cho ngày hôm nay. (Dùng 'Only' - Phong cách thông báo chính thức)",
    expectedEnglish: ["Tickets are valid for this day only.", "Tickets valid for this day only"],
    type: 'writing'
  },
  {
    id: 10,
    session: SessionType.ONLY_EVEN,
    vietnamese: "Anh ấy thậm chí còn không nói lời tạm biệt. (Dùng 'Even' - Vị trí giữa câu)",
    expectedEnglish: ["He didn't even say goodbye.", "He did not even say goodbye"],
    type: 'writing'
  },
  {
    id: 11,
    session: SessionType.ONLY_EVEN,
    vietnamese: "(Trang trọng) Anh ấy chỉ cho những người bạn thân nhất của mình mượn tiền.",
    expectedEnglish: ["He lent money only to his closest friends.", "He lent money only to his closest friends"],
    type: 'writing'
  },
  {
    id: 12,
    session: SessionType.ONLY_EVEN,
    vietnamese: "(Không trang trọng) Tôi chỉ xin bạn năm phút thôi.",
    expectedEnglish: ["I only asked for five minutes of your time.", "I only asked for five minutes"],
    type: 'writing'
  },
  {
    id: 13,
    session: SessionType.ONLY_EVEN,
    vietnamese: "(Nhấn mạnh chủ ngữ) Thậm chí giáo viên cũng bị bối rối bởi câu hỏi.",
    expectedEnglish: ["Even the teacher was confused by the question.", "Even the teacher was confused"],
    type: 'writing'
  },
  {
    id: 14,
    session: SessionType.ONLY_EVEN,
    vietnamese: "(Thông báo chính thức) Chỉ dành cho cư dân đỗ xe.",
    expectedEnglish: ["Parking for residents only.", "Parking for residents only"],
    type: 'writing'
  },
  {
    id: 15,
    session: SessionType.ONLY_EVEN,
    vietnamese: "(Nhấn mạnh) Cô ấy chạy 10km ngay cả vào Chủ nhật.",
    expectedEnglish: ["She runs 10km even on Sundays.", "She runs 10km even on Sundays"],
    type: 'writing'
  },
  {
    id: 16,
    session: SessionType.ONLY_EVEN,
    vietnamese: "Con chó của tôi thông minh đến mức nó thậm chí còn xem TV.",
    expectedEnglish: ["My dog is so smart, he even watches TV.", "My dog is so smart he even watches TV"],
    type: 'writing'
  },
  {
    id: 17,
    session: SessionType.ONLY_EVEN,
    vietnamese: "(Thông báo chính thức) Chỉ giảm tốc độ ở phía trước.",
    expectedEnglish: ["Reduced speed only ahead.", "Reduced speed ahead only"],
    type: 'writing'
  },
  {
    id: 18,
    session: SessionType.ONLY_EVEN,
    vietnamese: "(Nhấn mạnh chủ ngữ) Thậm chí một đứa trẻ cũng có thể hiểu câu đố đơn giản này.",
    expectedEnglish: ["Even a child could understand this simple puzzle.", "Even a child could understand this simple puzzle"],
    type: 'writing'
  },
  {
    id: 19,
    session: SessionType.ONLY_EVEN,
    vietnamese: "Tôi chỉ muốn giúp đỡ, nhưng tôi đã làm mọi chuyện tệ hơn.",
    expectedEnglish: ["I only wanted to help, but I made it worse.", "I only wanted to help but I made it worse"],
    type: 'writing'
  },
  {
    id: 20,
    session: SessionType.ONLY_EVEN,
    vietnamese: "(Trang trọng) Ưu đãi chỉ dành cho khách hàng mới.",
    expectedEnglish: ["The offer is available only to new customers.", "The offer is available only to new customers"],
    type: 'writing'
  },

  // SESSION 2: TRUTH & VIEWPOINT ADVERBS (25 questions)
  {
    id: 21,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Về mặt kiến trúc, nhà thờ này thật lộng lẫy.",
    expectedEnglish: ["Architecturally, the church is magnificent.", "From an architectural point of view, the church is magnificent"],
    type: 'writing'
  },
  {
    id: 22,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Về mặt chính trị, quyết định này đầy rủi ro.",
    expectedEnglish: ["Politically, this decision is risky.", "From a political point of view, this decision is risky"],
    type: 'writing'
  },
  {
    id: 23,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Nhìn nhận một cách khoa học, không có bằng chứng nào cả.",
    expectedEnglish: ["Scientifically, there is no proof.", "Looking at it scientifically, there is no proof"],
    type: 'writing'
  },
  {
    id: 24,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Về mặt địa lý, khu vực này khó tiếp cận.",
    expectedEnglish: ["Geographically, the area is difficult to access.", "Regarding the geography, the area is difficult to access"],
    type: 'writing'
  },
  {
    id: 25,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Về mặt logic, lập luận của bạn không có ý nghĩa gì.",
    expectedEnglish: ["Logically, your argument makes no sense.", "In terms of logic, your argument makes no sense"],
    type: 'writing'
  },
  {
    id: 26,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Về khía cạnh kỹ thuật, thiết bị hoạt động hoàn hảo.",
    expectedEnglish: ["Technically, the device works perfectly.", "From a technical aspect, the device works perfectly"],
    type: 'writing'
  },
  {
    id: 27,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Từ góc độ môi trường, chúng ta cần giảm thiểu rác thải.",
    expectedEnglish: ["Environmentally, we need to reduce waste.", "From an environmental perspective, we need to reduce waste"],
    type: 'writing'
  },
  {
    id: 28,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Lý tưởng nhất là chúng ta nên đi sớm. (Viết lại bắt đầu bằng: From an ideal point of view...)",
    expectedEnglish: ["From an ideal point of view, we should leave early.", "From an ideal point of view we should leave early"],
    type: 'writing'
  },
  {
    id: 29,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Về mặt lý thuyết, nó sẽ hoạt động. (Viết lại bắt đầu bằng: In theory...)",
    expectedEnglish: ["In theory, it should work.", "In theory it should work"],
    type: 'writing'
  },
  {
    id: 30,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Về mặt kinh tế, đất nước đang phục hồi. (Viết lại bắt đầu bằng: From an economic...)",
    expectedEnglish: ["From an economic point of view, the country is recovering.", "From an economic perspective, the country is recovering"],
    type: 'writing'
  },
  {
    id: 31,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Sắp xếp: Cô ấy chắc chắn đã quên cuộc hẹn. (She / has / certainly / forgotten / the appointment)",
    expectedEnglish: ["She has certainly forgotten the appointment.", "She has certainly forgotten the appointment"],
    type: 'writing'
  },
  {
    id: 32,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Sắp xếp: Họ chắc chắn sẽ không đến dự tiệc. (They / definitely / won’t / come / to the party)",
    expectedEnglish: ["They definitely won't come to the party.", "They definitely will not come to the party"],
    type: 'writing'
  },
  {
    id: 33,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Sắp xếp: Có lẽ bạn chưa nghe tin tức. (You / haven’t / probably / heard / the news)",
    expectedEnglish: ["You probably haven't heard the news.", "You probably have not heard the news"],
    type: 'writing'
  },
  {
    id: 34,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Sắp xếp: Rõ ràng là vấn đề đang khẩn cấp. (The matter / clearly / is / urgent)",
    expectedEnglish: ["Clearly the matter is urgent.", "The matter is clearly urgent"],
    type: 'writing'
  },
  {
    id: 35,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Sắp xếp: Có lẽ phí dịch vụ không bao gồm. (Service / isn’t / presumably / included)",
    expectedEnglish: ["Service presumably isn't included.", "Service presumably is not included"],
    type: 'writing'
  },
  {
    id: 36,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Sắp xếp: Anh ấy chắc chắn đã phạm sai lầm. (He / undoubtedly / has / made / a mistake)",
    expectedEnglish: ["He has undoubtedly made a mistake.", "He undoubtedly has made a mistake"],
    type: 'writing'
  },
  {
    id: 37,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Sắp xếp: Tôi chắc chắn không đồng ý với bạn. (I / certainly / don’t / agree / with you)",
    expectedEnglish: ["I certainly don't agree with you.", "I certainly do not agree with you"],
    type: 'writing'
  },
  {
    id: 38,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Sắp xếp: Cô ấy có lẽ sẽ đến muộn. (She / will / probably / be / late)",
    expectedEnglish: ["She will probably be late.", "She probably will be late"],
    type: 'writing'
  },
  {
    id: 39,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Sắp xếp: Họ chắc chắn đã không lấy trộm chiếc xe. (They / definitely / didn’t / steal / the car)",
    expectedEnglish: ["They definitely didn't steal the car.", "They definitely did not steal the car"],
    type: 'writing'
  },
  {
    id: 40,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Sắp xếp: Có lẽ Mandy đã lỡ chuyến xe buýt. (Perhaps / missed / Mandy / has / the bus)",
    expectedEnglish: ["Perhaps Mandy has missed the bus.", "Mandy has perhaps missed the bus"],
    type: 'writing'
  },
  {
    id: 41,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Có lẽ ai đó đã làm hỏng cầu chì đèn. (Bắt đầu bằng: I expect...)",
    expectedEnglish: ["I expect someone has fused the lights.", "Someone has fused the lights, I expect"],
    type: 'writing'
  },
  {
    id: 42,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Chắc chắn rồi, tôi sẽ trả lại tiền cho bạn. (Dùng: Of course...)",
    expectedEnglish: ["Of course I'll pay you back.", "Of course I will pay you back"],
    type: 'writing'
  },
  {
    id: 43,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Nhìn chung, chúng tôi hòa thuận với nhau. (Kết thúc bằng: ...on the whole)",
    expectedEnglish: ["We get on well together on the whole.", "We get on quite well together on the whole"],
    type: 'writing'
  },
  {
    id: 44,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Cá nhân tôi nghĩ điều đó thật nực cười. (Dùng: In my opinion...)",
    expectedEnglish: ["In my opinion, it is ridiculous.", "In my opinion it is ridiculous"],
    type: 'writing'
  },
  {
    id: 45,
    session: SessionType.TRUTH_VIEWPOINT,
    vietnamese: "Chắc chắn là bạn đã nhầm rồi. (Dùng: I'm sure...)",
    expectedEnglish: ["I'm sure you've made a mistake.", "I am sure you have made a mistake"],
    type: 'writing'
  },

  // SESSION 3: COMMENT ADVERBS (25 questions)
  {
    id: 46,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Tôi thật ngớ ngẩn khi để cửa mở. (Dùng 'stupidly' làm trạng từ nhận xét)",
    expectedEnglish: ["I stupidly left the door open.", "I stupidly left the door open"],
    type: 'writing'
  },
  {
    id: 47,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Người đàn ông nhìn chằm chằm một cách ngớ ngẩn. (Dùng 'stupidly' làm trạng từ chỉ cách thức)",
    expectedEnglish: ["The man stared stupidly.", "The man stared stupidly"],
    type: 'writing'
  },
  {
    id: 48,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Dick đã khôn ngoan khi không can thiệp. (Dùng 'wisely')",
    expectedEnglish: ["Dick wisely didn't interfere.", "Dick wisely did not interfere"],
    type: 'writing'
  },
  {
    id: 49,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Thành thật mà nói, tôi không quan tâm. (Dùng 'Frankly')",
    expectedEnglish: ["Frankly, I don't care.", "Frankly I do not care"],
    type: 'writing'
  },
  {
    id: 50,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Thật đáng ngạc nhiên là tờ báo không quan tâm. (Dùng 'Surprisingly')",
    expectedEnglish: ["Surprisingly, the newspaper wasn't interested.", "The newspaper wasn't interested, surprisingly"],
    type: 'writing'
  },
  {
    id: 51,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Thật may mắn là không có ai bị thương. (Bắt đầu: Luckily...)",
    expectedEnglish: ["Luckily, no one was hurt.", "Luckily no one was hurt"],
    type: 'writing'
  },
  {
    id: 52,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Tôi đã ngạc nhiên khi anh ấy vượt qua kỳ thi. (Bắt đầu: To my...)",
    expectedEnglish: ["To my surprise, he passed the exam.", "To my surprise he passed the exam"],
    type: 'writing'
  },
  {
    id: 53,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Thật đáng thất vọng cho Phil khi kế hoạch của anh ấy thất bại. (Bắt đầu: To Phil's...)",
    expectedEnglish: ["To Phil's disappointment, his plan failed.", "To Phil's delight his plan failed"], // Note: Prompt said failed, user context said delight for success. Fixed here for "failed".
    type: 'writing'
  },
  {
    id: 54,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Tôi e rằng chúng ta đã không thắng. (Dùng 'Unfortunately')",
    expectedEnglish: ["Unfortunately, we didn't win.", "Unfortunately we did not win"],
    type: 'writing'
  },
  {
    id: 55,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Tôi đang thành thật khi nói rằng bạn sai. (Bắt đầu: Honestly...)",
    expectedEnglish: ["Honestly, you are wrong.", "Honestly, I think you're wrong"],
    type: 'writing'
  },
  {
    id: 56,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Cô ấy thật tử tế khi giúp đỡ chúng tôi. (Dùng: She kindly...)",
    expectedEnglish: ["She kindly helped us.", "She kindly helped us"],
    type: 'writing'
  },
  {
    id: 57,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Anh ấy thật dũng cảm khi chiến đấu với sư tử. (Dùng: He bravely...)",
    expectedEnglish: ["He bravely fought the lion.", "He bravely fought the lion"],
    type: 'writing'
  },
  {
    id: 58,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Thật đáng ngạc nhiên là cửa hàng đã đóng cửa. (Dùng 'Surprisingly')",
    expectedEnglish: ["Surprisingly, the shop was closed.", "The shop was closed, surprisingly"],
    type: 'writing'
  },
  {
    id: 59,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Tôi rất vui mừng vì cô ấy đã chấp nhận lời đề nghị. (Bắt đầu: To my...)",
    expectedEnglish: ["To my delight, she accepted the offer.", "To my delight she accepted the offer"],
    type: 'writing'
  },
  {
    id: 60,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Tôi thật bất cẩn khi làm mất chìa khóa. (Bắt đầu: I carelessly...)",
    expectedEnglish: ["I carelessly lost the keys.", "I carelessly lost the keys"],
    type: 'writing'
  },
  {
    id: 61,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Dĩ nhiên, cha mẹ luôn muốn điều tốt nhất cho con cái. (Bắt đầu bằng một trạng từ phù hợp)",
    expectedEnglish: ["Naturally, parents want the best for their children.", "Of course, parents want the best for their children"],
    type: 'writing'
  },
  {
    id: 62,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Anh ấy đã khôn ngoan quyết định tiết kiệm tiền thay vì tiêu nó. (Dùng 'wisely')",
    expectedEnglish: ["He wisely decided to save the money instead of spending it.", "Wisely, he decided to save the money"],
    type: 'writing'
  },
  {
    id: 63,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Thật đáng thất vọng, cầu thủ đắt giá mới không ghi được bàn thắng nào. (Dùng 'Disappointingly')",
    expectedEnglish: ["Disappointingly, the expensive new player scored no goals.", "Disappointingly the expensive new player scored no goals"],
    type: 'writing'
  },
  {
    id: 64,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Tôi đã ngớ ngẩn cho rằng bạn biết đường. (Dùng 'stupidly')",
    expectedEnglish: ["I stupidly assumed you knew the way.", "I stupidly assumed you knew the way"],
    type: 'writing'
  },
  {
    id: 65,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Thật đáng kinh ngạc, cô ấy đã nhấc bổng chiếc xe để cứu đứa trẻ. (Dùng 'Astonishingly')",
    expectedEnglish: ["Astonishingly, she lifted the car to save the child.", "Astonishingly she lifted the car to save the child"],
    type: 'writing'
  },
  {
    id: 66,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Anh ấy không chuẩn bị cho kỳ thi, thật đáng ngạc nhiên. (Dùng 'surprisingly' ở cuối câu)",
    expectedEnglish: ["He didn't prepare for the exam, surprisingly.", "He did not prepare for the exam, surprisingly"],
    type: 'writing'
  },
  {
    id: 67,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Thật may mắn là chúng tôi tìm thấy ví kịp lúc. (Dùng 'Luckily')",
    expectedEnglish: ["Luckily, we found the wallet just in time.", "Luckily we found the wallet in time"],
    type: 'writing'
  },
  {
    id: 68,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Thật đáng buồn, họ đã phải hủy chuyến đi. (Dùng 'Sadly' hoặc 'Unfortunately')",
    expectedEnglish: ["Sadly, they had to cancel the trip.", "Unfortunately, they had to cancel the trip"],
    type: 'writing'
  },
  {
    id: 69,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Cá nhân tôi nghĩ dự án này khả thi. (Dùng 'Personally')",
    expectedEnglish: ["Personally, I think this project is feasible.", "Personally I think the project is feasible"],
    type: 'writing'
  },
  {
    id: 70,
    session: SessionType.COMMENT_ADVERBS,
    vietnamese: "Về mặt kỹ thuật mà nói, kế hoạch này vẫn ổn. (Dùng 'Technically')",
    expectedEnglish: ["Technically speaking, the plan is fine.", "Technically, the plan is okay"],
    type: 'writing'
  },

  // SESSION 4: LINKING ADVERBS & DISCOURSE MARKERS (30 questions)
  {
    id: 71,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Giá thuê rất đắt. Tuy nhiên, vị trí rất hoàn hảo. (Dùng 'However')",
    expectedEnglish: ["The rent is expensive. However, the location is perfect.", "However the location is perfect"],
    type: 'writing'
  },
  {
    id: 72,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Bạn phải thanh toán trước thứ Sáu. Nếu không, bạn sẽ bị phạt. (Dùng 'Otherwise')",
    expectedEnglish: ["You must pay by Friday. Otherwise, you will be fined.", "Otherwise you will be fined"],
    type: 'writing'
  },
  {
    id: 73,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Anh ấy là một nghệ sĩ piano tuyệt vời. Thêm vào đó, anh ấy vẽ rất đẹp. (Dùng 'In addition' hoặc 'Also')",
    expectedEnglish: ["He is a great pianist. In addition, he paints beautifully.", "He is a great pianist. Also, he paints beautifully"],
    type: 'writing'
  },
  {
    id: 74,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Tôi không thích màu sắc này. Thứ nhất, nó quá đắt. (Dùng 'Firstly')",
    expectedEnglish: ["I don't like the color. Firstly, it's too expensive.", "Firstly it is too expensive"],
    type: 'writing'
  },
  {
    id: 75,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Đứa trẻ lớn lên. Tương tự, tỷ lệ cơ thể của nó cũng thay đổi. (Dùng 'Likewise')",
    expectedEnglish: ["The baby grows bigger. Likewise, its proportions change.", "Likewise its proportions change"],
    type: 'writing'
  },
  {
    id: 76,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Tôi quên ví tiền. Vì vậy, tôi không có đủ tiền. (Dùng 'Therefore')",
    expectedEnglish: ["I forgot my wallet. Therefore, I didn't have enough money.", "Therefore I did not have enough money"],
    type: 'writing'
  },
  {
    id: 77,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Cô ấy đã học hành chăm chỉ. Kết quả là, cô ấy được điểm A. (Dùng 'As a result')",
    expectedEnglish: ["She studied hard. As a result, she got an A.", "As a result she got an A"],
    type: 'writing'
  },
  {
    id: 78,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Chúng ta có thể lái xe. Ngoài ra, chúng ta có thể đi tàu hỏa. (Dùng 'Alternatively')",
    expectedEnglish: ["We could drive. Alternatively, we could take the train.", "Alternatively we could take the train"],
    type: 'writing'
  },
  {
    id: 79,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Hẹn gặp lại bạn vào thứ Ba. Hoặc đúng hơn là, thứ Tư. (Dùng 'Or rather')",
    expectedEnglish: ["I'll see you on Tuesday. Or rather, Wednesday.", "Or rather Wednesday"],
    type: 'writing'
  },
  {
    id: 80,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Chính phủ đã bán dịch vụ điện thoại. Khí đốt cũng được tư nhân hóa theo cách tương tự. (Dùng 'same way')",
    expectedEnglish: ["The government sold the phone service. Gas was privatized in the same way.", "Gas and electricity were privatized in the same way"],
    type: 'writing'
  },
  {
    id: 81,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Nói về kỳ nghỉ, bạn đã đặt chỗ chưa? (Dùng 'Talking of...')",
    expectedEnglish: ["Talking of holidays, have you booked yours yet?", "Talking of holidays have you booked yours yet?"],
    type: 'writing'
  },
  {
    id: 82,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Có hai lý do. Thứ nhất, tôi mệt...",
    expectedEnglish: ["There are two reasons. Firstly, I'm tired.", "Firstly I am tired"],
    type: 'writing'
  },
  {
    id: 83,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Chúng ta cần thêm thiết bị. Chẳng hạn như máy đào. (Dùng 'for example')",
    expectedEnglish: ["We need more equipment. Diggers, for example.", "Diggers for example"],
    type: 'writing'
  },
  {
    id: 84,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Muộn rồi. Dù sao thì, tôi cũng không đói. (Dùng 'Anyway')",
    expectedEnglish: ["It's late. Anyway, I'm not hungry.", "Anyway I am not hungry"],
    type: 'writing'
  },
  {
    id: 85,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Vấn đề đang được xem xét. Nói cách khác, họ đang suy nghĩ về nó. (Dùng 'In other words')",
    expectedEnglish: ["The matter is under consideration. In other words, they are thinking about it.", "In other words they are thinking about it"],
    type: 'writing'
  },
  {
    id: 86,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Nhân tiện, bạn có xem trận đấu không? (Dùng 'By the way')",
    expectedEnglish: ["By the way, did you see the match?", "By the way did you see the match?"],
    type: 'writing'
  },
  {
    id: 87,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Tóm lại, đó là một năm tốt đẹp. (Dùng 'In conclusion')",
    expectedEnglish: ["In conclusion, it was a good year.", "In conclusion it was a good year"],
    type: 'writing'
  },
  {
    id: 88,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Tôi nên về nhà. Sau tất cả, đã nửa đêm rồi. (Dùng 'after all')",
    expectedEnglish: ["I should go home. It's midnight, after all.", "It is midnight after all"],
    type: 'writing'
  },
  {
    id: 89,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Vàng là một kim loại rất quý giá. Tuy nhiên, nó rất mềm. (Dùng 'However')",
    expectedEnglish: ["Gold is a very valuable metal. However, it is very soft.", "However it is very soft"],
    type: 'writing'
  },
  {
    id: 90,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Bạn cần đội mũ bảo hiểm. Nếu không, bạn có thể bị thương ở đầu. (Dùng 'Otherwise')",
    expectedEnglish: ["You need to wear a helmet. Otherwise, you might get a head injury.", "Otherwise you might get a head injury"],
    type: 'writing'
  },
  {
    id: 91,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Công việc trả lương cao. Mặt khác, giờ làm việc rất dài. (Dùng 'On the other hand')",
    expectedEnglish: ["The job pays well. On the other hand, the hours are very long.", "On the other hand the hours are long"],
    type: 'writing'
  },
  {
    id: 92,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Chiếc xe quá cũ. Hơn nữa, nó quá đắt. (Dùng 'Furthermore')",
    expectedEnglish: ["The car is too old. Furthermore, it is too expensive.", "Furthermore it is too expensive"],
    type: 'writing'
  },
  {
    id: 93,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Ông ấy rất già nhưng vẫn khỏe mạnh. (Dùng 'Nevertheless')",
    expectedEnglish: ["He is very old; nevertheless, he is healthy.", "He is very old. Nevertheless, he is healthy."],
    type: 'writing'
  },
  {
    id: 94,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Tôi không thích táo; tương tự, tôi không thích lê. (Dùng 'Likewise')",
    expectedEnglish: ["I don't like apples; likewise, I dislike pears.", "I do not like apples; likewise, I dislike pears"],
    type: 'writing'
  },
  {
    id: 95,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Tôi không có bút, vì vậy tôi đã dùng bút chì thay thế. (Dùng 'Instead')",
    expectedEnglish: ["I didn't have a pen, so I used a pencil instead.", "I used a pencil instead"],
    type: 'writing'
  },
  {
    id: 96,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Giá cả đang tăng. Tiền lương cũng đang tăng một cách tương tự. (Dùng 'Similarly')",
    expectedEnglish: ["Prices are rising. Similarly, wages are rising.", "Similarly wages are rising"],
    type: 'writing'
  },
  {
    id: 97,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Tôi đã không nhận được công việc. Dù sao thì, bạn đã cố gắng hết sức rồi. (Dùng 'Anyway')",
    expectedEnglish: ["I didn't get the job. Anyway, you tried your best.", "Anyway you tried your best"],
    type: 'writing'
  },
  {
    id: 98,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Tôi nghĩ anh ấy đang nói dối. Suy cho cùng, anh ấy đã làm điều đó trước đây rồi. (Dùng 'After all')",
    expectedEnglish: ["I think he's lying. After all, he's done it before.", "After all he has done it before"],
    type: 'writing'
  },
  {
    id: 99,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Chúng ta có thể gặp nhau lúc 5 giờ không? Không, hãy nói là 6 giờ thì đúng hơn. (Dùng 'actually' hoặc 'rather')",
    expectedEnglish: ["Can we meet at 5? No, let's say 6, actually.", "Or rather 6"],
    type: 'writing'
  },
  {
    id: 100,
    session: SessionType.LINKING_ADVERBS,
    vietnamese: "Đó là một vấn đề khó khăn. Rõ ràng là chúng ta cần giải quyết nó. (Dùng 'Clearly')",
    expectedEnglish: ["It's a difficult issue. Clearly, we need to solve it.", "Clearly we need to solve it"],
    type: 'writing'
  }
];

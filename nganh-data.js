// Danh mục ngành nghề đăng ký với Baokim. Mỗi dòng: mã|tên ngành|chi tiết 1|chi tiết 2... (mỗi mã luôn có thêm dòng "Khác")
(function(){
var HKD = `0111|Trồng lúa
0112|Trồng ngô và cây lương thực có hạt khác
0113|Trồng cây lấy củ có chất bột
0114|Trồng cây mía
0115|Trồng cây thuốc lá, thuốc lào
0116|Trồng cây lấy sợi
0117|Trồng cây có hạt chứa dầu
0118|Trồng rau, đậu các loại và trồng hoa
0119|Trồng cây hàng năm khác
0121|Trồng cây ăn quả
0122|Trồng cây lấy quả chứa dầu
0123|Trồng cây điều
0124|Trồng cây hồ tiêu
0125|Trồng cây cao su
0126|Trồng cây cà phê
0127|Trồng cây chè
0128|Trồng cây gia vị, cây dược liệu, cây hương liệu lâu năm
0129|Trồng cây lâu năm khác
0130|Nhân và chăm sóc cây giống nông nghiệp
0141|Chăn nuôi trâu, bò và sản xuất giống trâu, bò|Kinh doanh chăn nuôi trang trại
0142|Chăn nuôi ngựa, lừa, la và sản xuất giống ngựa, lừa
0144|Chăn nuôi dê, cừu, hươu, nai và sản xuất giống dê, cừu, hươu, nai
0145|Chăn nuôi lợn và sản xuất giống lợn
0146|Chăn nuôi gia cầm
0149|Chăn nuôi khác|Kinh doanh giống vật nuôi, sản xuất giống cây trồng
0150|Trồng trọt, chăn nuôi hỗn hợp
0161|Hoạt động dịch vụ trồng trọt|Kinh doanh dịch vụ xử lý vật thể thuộc diện kiểm dịch thực vật
0162|Hoạt động dịch vụ chăn nuôi
0163|Hoạt động dịch vụ sau thu hoạch
0164|Xử lý hạt giống để nhân giống
0170|Săn bắt, đánh bẫy và hoạt động dịch vụ có liên quan
0210|Trồng rừng, chăm sóc rừng và ươm giống cây lâm nghiệp
0220|Khai thác gỗ
0230|Khai thác, thu nhặt lâm sản trừ gỗ
0240|Hoạt động dịch vụ lâm nghiệp
0311|Khai thác thủy sản biển|Khai thác thủy sản
0312|Khai thác thủy sản nội địa
0321|Nuôi trồng thủy sản biển|Kinh doanh thủy sản
0322|Nuôi trồng thủy sản nội địa|Sản xuất, ương dưỡng giống thủy sản
0331|Hoạt động dịch vụ hỗ trợ khai thác thủy sản
0332|Hoạt động dịch vụ hỗ trợ nuôi trồng thủy sản
0510|Khai thác và thu gom than cứng
0520|Khai thác và thu gom than non
0610|Khai thác dầu thô|Hoạt động dầu khí
0620|Khai thác khí đốt tự nhiên
0710|Khai thác quặng sắt|Khai thác khoáng sản
0721|Khai thác quặng uranium và quặng thorium
0729|Khai thác quặng kim loại khác không chứa sắt
0730|Khai thác quặng kim loại quý hiếm
0810|Khai thác đá, cát, sỏi, đất sét
0891|Khai thác khoáng hóa chất và khoáng phân bón
0892|Khai thác và thu gom than bùn
0893|Khai thác muối
0899|Khai khoáng khác chưa được phân vào đâu
0910|Hoạt động dịch vụ hỗ trợ khai thác dầu thô và khí tự nhiên
0990|Hoạt động dịch vụ hỗ trợ khai khoáng khác|Kinh doanh dịch vụ thăm dò khoáng sản
1010|Chế biến, bảo quản thịt và các sản phẩm từ thịt|Kinh doanh giết mổ gia súc, gia cầm
1020|Chế biến, bảo quản thủy sản và các sản phẩm từ thủy sản
1030|Chế biến và bảo quản rau quả
1040|Sản xuất dầu, mỡ động, thực vật
1050|Chế biến sữa và các sản phẩm từ sữa
1061|Xay xát và sản xuất bột thô
1062|Sản xuất tinh bột và các sản phẩm từ tinh bột
1071|Sản xuất các loại bánh từ bột
1072|Sản xuất đường
1073|Sản xuất ca cao, sôcôla và bánh kẹo
1074|Sản xuất mì ống, mỳ sợi và sản phẩm tương tự
1075|Sản xuất món ăn, thức ăn chế biến sẵn
1076|Sản xuất chè
1077|Sản xuất cà phê
1079|Sản xuất thực phẩm khác chưa được phân vào đâu|Kinh doanh thực phẩm thuộc lĩnh vực quản lý chuyên ngành của Bộ Công Thương, Bộ Nông nghiệp và Môi trường và Bộ Y tế
1080|Sản xuất thức ăn gia súc, gia cầm và thủy sản|Sản xuất thức ăn thủy sản, sản phẩm xử lý môi trường nuôi trồng thủy sản; sản xuất thức ăn chăn nuôi, sản phẩm xử lý chất thải chăn nuôi
1101|Chưng, tinh cất và pha chế các loại rượu mạnh
1102|Sản xuất rượu vang
1103|Sản xuất bia
1104|Sản xuất mạch nha ủ men bia
1105|Sản xuất đồ uống không cồn, nước khoáng
1200|Sản xuất sản phẩm thuốc lá|Kinh doanh sản phẩm thuốc lá, nguyên liệu thuốc lá, máy móc, thiết bị thuộc chuyên ngành thuốc lá, trừ thuốc lá điện tử, thuốc lá nung nóng
1311|Sản xuất sợi
1312|Sản xuất vải dệt thoi
1313|Hoàn thiện sản phẩm dệt
1391|Sản xuất vải dệt kim, vải đan móc và vải không dệt khác
1392|Sản xuất hàng dệt sẵn (trừ trang phục)
1393|Sản xuất thảm, chăn, đệm
1394|Sản xuất các loại dây bện và lưới
1399|Sản xuất các loại hàng dệt khác chưa được phân vào đâu
1410|Sản xuất trang phục (trừ trang phục từ da lông thú)
1420|Sản xuất sản phẩm từ da lông thú
1430|Sản xuất trang phục đan móc
1511|Thuộc, sơ chế da; sơ chế và nhuộm da lông thú
1512|Sản xuất vali, túi xách và các loại tương tự, sản xuất yên đệm
1520|Sản xuất giày, dép
1610|Cưa, xẻ, bào gỗ và bảo quản gỗ
1621|Sản xuất gỗ dán, gỗ lạng, ván ép và ván mỏng khác
1622|Sản xuất đồ gỗ xây dựng
1623|Sản xuất bao bì bằng gỗ
1629|Sản xuất sản phẩm khác từ gỗ; sản xuất sản phẩm từ tre, nứa, rơm, rạ và vật liệu tết bện
1701|Sản xuất bột giấy, giấy và bìa
1702|Sản xuất giấy nhăn, bìa nhăn, bao bì từ giấy và bìa
1709|Sản xuất các sản phẩm khác từ giấy và bìa chưa được phân vào đâu
1811|In ấn|Kinh doanh dịch vụ in, trừ in bao bì không chứa nhãn hàng hóa
1812|Dịch vụ liên quan đến in
1820|Sao chép bản ghi các loại
1910|Sản xuất than cốc
1920|Sản xuất sản phẩm dầu mỏ tinh chế; sản xuất sản phẩm nhiên liệu hóa thạch
2011|Sản xuất hóa chất cơ bản|Kinh doanh tiền chất thuốc nổ|Sản xuất, kinh doanh hóa chất, trừ hóa chất thuộc danh mục hóa chất, khoáng vật cấm quy định tại Phụ lục II ban hành kèm theo Luật Đầu tư số 143/2025/QH15; dịch vụ tồn trữ hóa chất; hoạt động tư vấn chuyên ngành hóa chất|Kinh doanh tiền chất công nghiệp
2012|Sản xuất phân bón và hợp chất ni tơ|Sản xuất phân bón
2013|Sản xuất plastic và cao su tổng hợp dạng nguyên sinh
2021|Sản xuất thuốc trừ sâu và sản phẩm hóa chất khác dùng trong nông nghiệp|Kinh doanh thuốc bảo vệ thực vật
2022|Sản xuất sơn, véc ni và các chất sơn, quét tương tự; sản xuất mực in và ma tít
2023|Sản xuất mỹ phẩm, nước hoa, xà phòng, chất tẩy rửa, làm bóng và chế phẩm vệ sinh|Sản xuất mỹ phẩm
2029|Sản xuất sản phẩm hóa chất khác chưa được phân vào đâu|Kinh doanh các loại pháo, trừ pháo nổ|Kinh doanh vật liệu nổ công nghiệp (bao gồm cả hoạt động tiêu hủy)
2030|Sản xuất sợi nhân tạo
2100|Sản xuất thuốc, hóa dược và dược liệu
2211|Sản xuất săm, lốp cao su; đắp và tái chế lốp cao su
2219|Sản xuất sản phẩm khác từ cao su
2220|Sản xuất sản phẩm từ plastic
2310|Sản xuất thủy tinh và sản phẩm từ thủy tinh
2391|Sản xuất sản phẩm chịu lửa
2392|Sản xuất vật liệu xây dựng từ đất sét
2393|Sản xuất sản phẩm gốm sứ khác
2394|Sản xuất xi măng, vôi và thạch cao
2395|Sản xuất bê tông và các sản phẩm từ bê tông, xi măng và thạch cao
2396|Cắt, tạo dáng và hoàn thiện đá
2399|Sản xuất sản phẩm từ chất khoáng phi kim loại khác chưa được phân vào đâu
2410|Sản xuất sắt, thép, gang
2420|Sản xuất kim loại quý và kim loại màu
2431|Đúc sắt, thép
2432|Đúc kim loại màu
2511|Sản xuất các cấu kiện kim loại
2512|Sản xuất thùng, bể chứa và dụng cụ chứa đựng bằng kim loại
2513|Sản xuất nồi hơi (trừ nồi hơi trung tâm)
2520|Sản xuất vũ khí và đạn dược|Kinh doanh công cụ hỗ trợ (bao gồm cả sửa chữa)
2591|Rèn, dập, ép và cán kim loại; luyện bột kim loại
2592|Gia công cơ khí; xử lý và tráng phủ kim loại
2593|Sản xuất dao kéo, dụng cụ cầm tay và đồ kim loại thông dụng
2599|Sản xuất sản phẩm khác bằng kim loại chưa được phân vào đâu
2611|Sản xuất pin mặt trời, tấm pin mặt trời và bộ biến tần quang điện
2619|Sản xuất linh kiện điện tử khác
2620|Sản xuất máy tính và thiết bị ngoại vi của máy tính
2630|Sản xuất thiết bị truyền thông|Kinh doanh thiết bị, phần mềm ngụy trang dùng để ghi âm, ghi hình, định vị, thiết bị gây nhiễu, phá sóng thông tin di động
2640|Sản xuất sản phẩm điện tử dân dụng
2651|Sản xuất thiết bị đo lường, kiểm tra, định hướng và điều khiển
2652|Sản xuất đồng hồ
2660|Sản xuất thiết bị bức xạ, thiết bị điện tử trong y học, điện liệu pháp
2670|Sản xuất thiết bị và dụng cụ quang học
2680|Sản xuất băng, đĩa từ tính và quang học
2710|Sản xuất mô tơ, máy phát, biến thế điện, thiết bị phân phối và điều khiển điện
2720|Sản xuất pin và ắc quy
2731|Sản xuất dây cáp, sợi cáp quang học
2732|Sản xuất dây, cáp điện và điện tử khác
2733|Sản xuất thiết bị dây dẫn điện các loại
2740|Sản xuất thiết bị điện chiếu sáng
2750|Sản xuất đồ điện dân dụng
2790|Sản xuất thiết bị điện khác
2811|Sản xuất động cơ, tua bin (trừ động cơ máy bay, ô tô, mô tô và xe máy)
2812|Sản xuất thiết bị sử dụng năng lượng chiết lưu
2813|Sản xuất máy bơm, máy nén, vòi và van khác
2814|Sản xuất bi, bánh răng, hộp số, các bộ phận điều khiển và truyền chuyển động
2815|Sản xuất lò nướng, lò luyện và lò nung
2816|Sản xuất các thiết bị nâng, hạ và bốc xếp
2817|Sản xuất máy móc và thiết bị văn phòng (trừ máy tính và thiết bị ngoại vi của máy tính)
2818|Sản xuất dụng cụ cầm tay chạy bằng mô tơ hoặc khí nén
2819|Sản xuất máy thông dụng khác
2821|Sản xuất máy nông nghiệp và lâm nghiệp
2822|Sản xuất máy công cụ và máy tạo hình kim loại
2823|Sản xuất máy móc, thiết bị cho ngành luyện kim
2824|Sản xuất máy khai thác mỏ và xây dựng
2825|Sản xuất máy chế biến thực phẩm, đồ uống và thuốc lá
2826|Sản xuất máy cho ngành dệt, may và da
2829|Sản xuất máy chuyên dụng khác
2910|Sản xuất ô tô và xe có động cơ khác|Sản xuất, lắp ráp, nhập khẩu xe ô tô
2920|Sản xuất thân xe ô tô và xe có động cơ khác, rơ moóc và bán rơ moóc
2930|Sản xuất phụ tùng và bộ phận phụ trợ cho xe ô tô và xe có động cơ khác
3011|Đóng tàu và cấu kiện nổi
3012|Đóng thuyền, xuồng thể thao và giải trí
3020|Sản xuất đầu máy xe lửa, xe điện, toa xe và phương tiện, thiết bị chuyên dùng trên đường ray
3030|Sản xuất máy bay, tàu vũ trụ và máy móc liên quan|Kinh doanh dịch vụ thiết kế, sản xuất, bảo dưỡng, thử nghiệm tàu bay, động cơ tàu bay, cánh quạt tàu bay và trang thiết bị tàu bay tại Việt Nam|Nghiên cứu chế tạo, thử nghiệm, sửa chữa, bảo dưỡng tàu bay không người lái, phương tiện bay khác, động cơ tàu bay, cánh quạt tàu bay và trang bị, thiết bị của tàu bay không người lái, phương tiện bay khác
3040|Sản xuất xe cơ giới chiến đấu dùng trong quân đội|Kinh doanh quân trang, quân dụng cho lực lượng vũ trang, vũ khí quân dụng, trang thiết bị, kỹ thuật, khí tài, phương tiện chuyên dùng quân sự, công an; linh kiện, bộ phận, phụ tùng, vật tư và trang thiết bị đặc chủng, công nghệ chuyên dùng chế tạo chúng
3091|Sản xuất mô tô, xe máy
3092|Sản xuất xe đạp và xe cho người khuyết tật
3099|Sản xuất phương tiện và thiết bị vận tải khác chưa được phân vào đâu
3101|Sản xuất giường, tủ, bàn, ghế bằng gỗ
3102|Sản xuất giường, tủ, bàn, ghế bằng kim loại
3109|Sản xuất giường, tủ, bàn, ghế bằng vật liệu khác
3211|Sản xuất đồ kim hoàn và chi tiết liên quan
3212|Sản xuất đồ giả kim hoàn và chi tiết liên quan
3220|Sản xuất nhạc cụ
3230|Sản xuất dụng cụ thể dục, thể thao
3240|Sản xuất đồ chơi, trò chơi
3250|Sản xuất thiết bị, dụng cụ y tế, nha khoa, chỉnh hình và phục hồi chức năng
3290|Sản xuất khác chưa được phân vào đâu|Sản xuất con dấu
3311|Sửa chữa, bảo dưỡng các sản phẩm kim loại đúc sẵn
3312|Sửa chữa, bảo dưỡng máy móc, thiết bị
3313|Sửa chữa, bảo dưỡng thiết bị điện tử và quang học
3314|Sửa chữa, bảo dưỡng thiết bị điện
3315|Sửa chữa, bảo dưỡng phương tiện vận tải (trừ ô tô, mô tô, xe máy và xe có động cơ khác)
3319|Sửa chữa, bảo dưỡng thiết bị khác
3320|Lắp đặt máy móc và thiết bị công nghiệp
3511|Sản xuất điện từ nguồn năng lượng không tái tạo|Hoạt động phát điện, truyền tải điện, phân phối điện, bán buôn điện, bán lẻ điện
3512|Sản xuất điện từ nguồn năng lượng tái tạo
3513|Truyền tải và phân phối điện
3520|Sản xuất khí đốt, phân phối nhiên liệu khí bằng đường ống
3530|Sản xuất, phân phối hơi nước, nước nóng, điều hoà không khí và sản xuất nước đá
3540|Hoạt động trung gian hoặc đại lý điện, khí đốt
3600|Khai thác, xử lý và cung cấp nước|Kinh doanh dịch vụ khai thác tài nguyên nước
3700|Thoát nước và xử lý nước thải
3811|Thu gom rác thải không độc hại
3812|Thu gom rác thải độc hại
3821|Xử lý và tiêu hủy rác thải không độc hại
3822|Xử lý và tiêu hủy rác thải độc hại|Kinh doanh dịch vụ vận chuyển, xử lý chất thải nguy hại
3830|Tái chế phế liệu|Nhập khẩu phế liệu
3900|Xử lý ô nhiễm và hoạt động quản lý chất thải khác
4101|Xây dựng nhà để ở
4102|Xây dựng nhà không để ở
4211|Xây dựng công trình đường sắt
4212|Xây dựng công trình đường bộ
4221|Xây dựng công trình điện
4222|Xây dựng công trình cấp, thoát nước|Kinh doanh dịch vụ khoan nước dưới đất
4223|Xây dựng công trình viễn thông, thông tin liên lạc
4229|Xây dựng công trình công ích khác
4291|Xây dựng công trình thủy
4292|Xây dựng công trình khai khoáng
4293|Xây dựng công trình chế biến, chế tạo
4299|Xây dựng công trình kỹ thuật dân dụng khác
4311|Phá dỡ
4312|Chuẩn bị mặt bằng|Kinh doanh dịch vụ nổ mìn
4321|Lắp đặt hệ thống điện
4322|Lắp đặt hệ thống cấp, thoát nước, hệ thống sưởi và điều hoà không khí
4329|Lắp đặt hệ thống xây dựng khác
4330|Hoàn thiện công trình xây dựng
4340|Hoạt động dịch vụ trung gian cho xây dựng chuyên dụng
4390|Hoạt động xây dựng chuyên dụng khác
4610|Đại lý, môi giới, đấu giá hàng hóa
4620|Bán buôn nông, lâm sản nguyên liệu (trừ gỗ, tre, nứa) và động vật sống
4631|Bán buôn gạo, lúa mỳ, sản phẩm từ ngũ cốc khác, bột mỳ|Xuất khẩu gạo
4632|Bán buôn thực phẩm
4633|Bán buôn đồ uống
4634|Bán buôn sản phẩm thuốc lá, thuốc lào
4641|Bán buôn vải, hàng may mặc, giày dép
4642|Bán buôn giường, tủ, bàn ghế và đồ nội thất tương tự trong gia đình, văn phòng, cửa hàng; thảm, đệm và thiết bị chiếu sáng
4649|Bán buôn đồ dùng khác cho gia đình|Kinh doanh dịch vụ phát hành báo chí nhập khẩu|Kinh doanh thuốc thú y, vắc xin, chế phẩm sinh học, vi sinh vật, hóa chất dùng trong thú y
4651|Bán buôn máy tính, thiết bị ngoại vi và phần mềm
4652|Bán buôn thiết bị và linh kiện điện tử, viễn thông
4653|Bán buôn máy móc, thiết bị và phụ tùng máy nông nghiệp
4659|Bán buôn máy móc, thiết bị và phụ tùng máy khác|Nhập khẩu, tạm nhập tái xuất, tạm xuất tái nhập tàu bay không người lái, phương tiện bay khác, động cơ tàu bay, cánh quạt tàu bay và trang bị, thiết bị của tàu bay không người lái, phương tiện bay khác|Kinh doanh thiết bị y tế
4661|Bán buôn ô tô và xe có động cơ khác
4662|Bán buôn phụ tùng và các bộ phận phụ trợ của ô tô và xe có động cơ khác
4663|Bán buôn mô tô, xe máy, phụ tùng và các bộ phận phụ trợ của mô tô, xe máy
4671|Bán buôn nhiên liệu rắn, lỏng, khí và các sản phẩm liên quan|Kinh doanh xăng dầu
4672|Bán buôn kim loại và quặng kim loại|Kinh doanh vàng, trừ vàng trang sức, mỹ nghệ
4673|Bán buôn vật liệu, thiết bị lắp đặt khác trong xây dựng
4679|Bán buôn chuyên doanh khác chưa được phân vào đâu|Kinh doanh ngành, nghề có sử dụng vật liệu nổ công nghiệp và tiền chất thuốc nổ
4690|Bán buôn tổng hợp|Hoạt động mua bán hàng hóa và các hoạt động liên quan trực tiếp đến hoạt động mua bán hàng hóa của nhà cung cấp dịch vụ nước ngoài tại Việt Nam|Kinh doanh sản phẩm biến đổi gen|Nhập khẩu hàng hóa văn hóa thuộc diện quản lý chuyên ngành của Bộ Văn hóa, Thể thao và Du lịch
4711|Bán lẻ tổng hợp với lương thực, thực phẩm, đồ uống, thuốc lá, thuốc lào chiếm tỷ trọng lớn
4719|Bán lẻ tổng hợp khác|Kinh doanh theo phương thức bán hàng đa cấp
4721|Bán lẻ lương thực
4722|Bán lẻ thực phẩm
4723|Bán lẻ đồ uống
4724|Bán lẻ sản phẩm thuốc lá, thuốc lào
4730|Bán lẻ nhiên liệu động cơ
4740|Bán lẻ thiết bị công nghệ thông tin và truyền thông
4751|Bán lẻ vải, len, sợi, chỉ khâu và hàng dệt khác
4752|Bán lẻ đồ ngũ kim, sơn, kính, vật liệu và thiết bị lắp đặt khác trong xây dựng
4753|Bán lẻ thảm, đệm, chăn, màn, rèm, vật liệu phủ tường và sàn
4759|Bán lẻ đồ điện gia dụng, giường, tủ, bàn, ghế và đồ nội thất tương tự, đèn và bộ đèn điện, đồ dùng gia đình khác chưa được phân vào đâu
4761|Bán lẻ sách, báo, tạp chí, văn phòng phẩm
4762|Bán lẻ thiết bị, dụng cụ thể dục, thể thao
4763|Bán lẻ trò chơi, đồ chơi
4769|Bán lẻ sản phẩm văn hóa, giải trí khác chưa phân vào đâu
4771|Bán lẻ hàng may mặc, giày, dép, hàng da và giả da
4772|Bán lẻ thuốc, dụng cụ y tế, mỹ phẩm và vật phẩm vệ sinh|Kinh doanh dược
4773|Bán lẻ hàng hóa khác mới (trừ ô tô, mô tô, xe máy và các bộ phận phụ trợ)
4774|Bán lẻ hàng hóa đã qua sử dụng|Kinh doanh di vật, cổ vật, trừ kinh doanh xuất khẩu di vật, cổ vật; kinh doanh dịch vụ bảo quản, phục chế, số hóa, xây dựng cơ sở dữ liệu di vật, cổ vật
4781|Bán lẻ ô tô và xe có động cơ khác
4782|Bán lẻ phụ tùng và các bộ phận phụ trợ của ô tô và xe có động cơ khác
4783|Bán lẻ mô tô, xe máy, phụ tùng và các bộ phận phụ trợ của mô tô, xe máy
4790|Hoạt động dịch vụ trung gian bán lẻ|Hoạt động thương mại điện tử: quản lý và vận hành nền tảng thương mại điện tử trung gian, mạng xã hội hoạt động thương mại điện tử, nền tảng thương mại điện tử tích hợp; chứng thực hợp đồng điện tử trong thương mại
4911|Vận tải hành khách đường sắt|Kinh doanh vận tải đường sắt
4912|Vận tải hàng hóa đường sắt
4921|Vận tải hành khách bằng xe buýt trong nội thành
4922|Vận tải hành khách bằng xe buýt giữa nội thành và ngoại thành, liên tỉnh
4929|Vận tải hành khách bằng xe buýt loại khác
4931|Vận tải hành khách đường bộ trong nội thành, ngoại thành (trừ vận tải bằng xe buýt)|Kinh doanh vận tải đường bộ
4932|Vận tải hành khách đường bộ khác|Kinh doanh vận tải hành khách
4933|Vận tải hàng hóa bằng đường bộ|Kinh doanh dịch vụ vận chuyển hàng nguy hiểm|Kinh doanh vận tải hàng hóa
4940|Vận tải đường ống
5011|Vận tải hành khách ven biển và viễn dương
5012|Vận tải hàng hóa ven biển và viễn dương
5021|Vận tải hành khách đường thủy nội địa
5022|Vận tải hàng hóa đường thủy nội địa
5110|Vận tải hành khách hàng không|Kinh doanh vận tải hàng không
5120|Vận tải hàng hóa hàng không
5210|Kho bãi và lưu giữ hàng hóa|Kinh doanh kho ngoại quan, địa điểm thu gom hàng lẻ|Kinh doanh địa điểm làm thủ tục hải quan, tập kết, kiểm tra, giám sát hải quan
5221|Hoạt động dịch vụ hỗ trợ trực tiếp cho vận tải đường sắt|Kinh doanh kết cấu hạ tầng đường sắt
5222|Hoạt động dịch vụ hỗ trợ trực tiếp cho vận tải đường thủy
5223|Hoạt động dịch vụ hỗ trợ trực tiếp cho vận tải hàng không|Kinh doanh cảng hàng không|Kinh doanh dịch vụ hàng không tại cảng hàng không
5224|Bốc xếp hàng hóa
5225|Hoạt động dịch vụ hỗ trợ trực tiếp cho vận tải đường bộ
5229|Hoạt động dịch vụ hỗ trợ khác liên quan đến vận tải
5231|Hoạt động dịch vụ trung gian cho vận tải hàng hóa
5232|Hoạt động dịch vụ trung gian cho vận tải hành khách
5310|Bưu chính|Kinh doanh dịch vụ bưu chính
5320|Chuyển phát
5330|Hoạt động dịch vụ trung gian cho hoạt động bưu chính và chuyển phát
5510|Khách sạn và dịch vụ lưu trú tương tự
5520|Dịch vụ lưu trú ngắn ngày khác
5530|Hoạt động dịch vụ trung gian cho dịch vụ lưu trú
5590|Cơ sở lưu trú khác
5610|Nhà hàng và các dịch vụ ăn uống phục vụ lưu động
5621|Cung cấp dịch vụ ăn uống theo hợp đồng không thường xuyên với khách hàng
5629|Dịch vụ ăn uống khác
5630|Dịch vụ phục vụ đồ uống
5640|Hoạt động dịch vụ trung gian cho dịch vụ ăn uống
5811|Xuất bản sách|Hoạt động của nhà xuất bản
5812|Xuất bản báo
5813|Xuất bản tạp chí và các ấn phẩm định kỳ
5819|Hoạt động xuất bản khác
5821|Xuất bản trò chơi điện tử|Kinh doanh trò chơi trên mạng viễn thông, mạng Internet
5829|Xuất bản phần mềm khác
5911|Hoạt động sản xuất phim điện ảnh, video và chương trình truyền hình
5912|Hoạt động hậu kỳ phim điện ảnh, video và chương trình truyền hình
5913|Hoạt động phát hành phim điện ảnh, video và chương trình truyền hình|Kinh doanh dịch vụ phổ biến phim
5914|Hoạt động chiếu phim
5920|Hoạt động ghi âm và xuất bản âm nhạc
6010|Hoạt động phát thanh và phân phối âm thanh|Kinh doanh dịch vụ phát thanh trả tiền
6020|Hoạt động xây dựng chương trình truyền hình, phát sóng truyền hình và phân phối video|Kinh doanh dịch vụ truyền hình trả tiền
6031|Hoạt động thông tấn
6039|Hoạt động các trang mạng xã hội và hoạt động phân phối nội dung khác|Mạng xã hội|Kinh doanh dịch vụ mạng xã hội|Kinh doanh dịch vụ thiết lập trang thông tin điện tử tổng hợp
6110|Hoạt động viễn thông có dây, không dây và vệ tinh|Kinh doanh dịch vụ viễn thông
6120|Hoạt động bán lại dịch vụ viễn thông và dịch vụ trung gian cho hoạt động viễn thông
6190|Hoạt động viễn thông khác
6211|Phát triển trò chơi điện tử, phần mềm trò chơi điện tử và các công cụ phần mềm trò chơi điện tử
6219|Lập trình máy tính khác
6220|Tư vấn máy tính và quản lý cơ sở hạ tầng máy tính|Kinh doanh sản phẩm, dịch vụ an ninh mạng (không bao gồm kinh doanh sản phẩm, dịch vụ mật mã dân sự)|Kinh doanh sản phẩm, dịch vụ mật mã dân sự
6290|Hoạt động dịch vụ máy tính và công nghệ thông tin khác|Dịch vụ chứng thực hợp đồng điện tử|Kinh doanh dịch vụ tin cậy|Kinh doanh dịch vụ xác thực điện tử
6310|Cơ sở hạ tầng công nghệ thông tin, xử lý dữ liệu, lưu trữ và các hoạt động liên quan|Kinh doanh sản phẩm, dịch vụ trung gian, phân tích, tổng hợp dữ liệu|Kinh doanh dịch vụ sàn dữ liệu|Dịch vụ xử lý dữ liệu cá nhân
6390|Hoạt động cổng tìm kiếm web và các dịch vụ thông tin khác
6411|Hoạt động Ngân hàng trung ương
6419|Hoạt động trung gian tiền tệ khác|Hoạt động kinh doanh của ngân hàng thương mại|Hoạt động kinh doanh của tổ chức tín dụng phi ngân hàng|Hoạt động kinh doanh của ngân hàng hợp tác xã, quỹ tín dụng nhân dân, tổ chức tài chính vi mô
6421|Hoạt động công ty nắm giữ tài sản
6422|Hoạt động của các kênh dẫn vốn
6431|Hoạt động quỹ thị trường tiền tệ
6432|Hoạt động quỹ đầu tư phi thị trường tiền tệ
6433|Hoạt động quỹ tín thác, tài sản và tài khoản đại lý
6491|Hoạt động cho thuê tài chính
6492|Hoạt động tài trợ thương mại quốc tế
6493|Hoạt động bao thanh toán
6494|Hoạt động chứng khoán hóa
6495|Hoạt động cấp tín dụng khác|Kinh doanh dịch vụ cầm đồ
6499|Hoạt động dịch vụ tài chính khác chưa được phân vào đâu (trừ bảo hiểm và hoạt động quỹ hưu trí)
6511|Bảo hiểm nhân thọ|Hoạt động kinh doanh bảo hiểm (không bao gồm dịch vụ phụ trợ bảo hiểm)
6512|Bảo hiểm phi nhân thọ|Hoạt động kinh doanh bảo hiểm (không bao gồm dịch vụ phụ trợ bảo hiểm)
6513|Bảo hiểm sức khỏe
6520|Tái bảo hiểm
6530|Hoạt động quỹ hưu trí
6611|Quản lý thị trường tài chính|Hoạt động Sở Giao dịch hàng hóa
6612|Môi giới hợp đồng hàng hóa và chứng khoán|Kinh doanh chứng khoán|Đại lý đổi ngoại tệ
6619|Hoạt động hỗ trợ dịch vụ tài chính chưa được phân vào đâu|Kinh doanh dịch vụ đăng ký, lưu ký, bù trừ và thanh toán chứng khoán; dịch vụ hỗ trợ giao dịch trên sàn giao dịch|Hoạt động trực tiếp nhận và chi trả ngoại tệ|Đại lý nhận và chi trả ngoại tệ|Cung ứng dịch vụ trung gian thanh toán, cung ứng dịch vụ thanh toán không qua tài khoản thanh toán của khách hàng; cung ứng dịch vụ tiền di động|Hoạt động cung cấp dịch vụ liên quan đến tài sản mã hoá
6621|Đánh giá rủi ro và thiệt hại
6622|Hoạt động của đại lý và môi giới bảo hiểm
6629|Hoạt động hỗ trợ khác cho bảo hiểm và quỹ hưu trí
6630|Hoạt động quản lý quỹ|Kinh doanh dịch vụ quản lý quỹ hưu trí tự nguyện
6810|Kinh doanh bất động sản, quyền sử dụng đất thuộc chủ sở hữu, chủ sử dụng hoặc đi thuê|Kinh doanh bất động sản
6821|Dịch vụ trung gian cho hoạt động bất động sản
6829|Hoạt động bất động sản khác trên cơ sở phí hoặc hợp đồng
6910|Hoạt động pháp luật|Hành nghề luật sư|Hành nghề công chứng|Hành nghề giám định tư pháp|Kinh doanh dịch vụ đại diện quyền sở hữu trí tuệ (bao gồm dịch vụ đại diện quyền tác giả, quyền liên quan, dịch vụ đại diện sở hữu công nghiệp và dịch vụ đại diện quyền đối với giống cây trồng)
6920|Hoạt động liên quan đến kế toán, kiểm toán và tư vấn về thuế|Kinh doanh dịch vụ kiểm toán
7010|Hoạt động của trụ sở văn phòng
7020|Hoạt động tư vấn quản lý kinh doanh và hoạt động tư vấn quản lý khác
7110|Hoạt động kiến trúc và tư vấn kỹ thuật có liên quan|Hoạt động thăm dò địa chất, nước dưới đất|Kinh doanh dịch vụ thẩm tra an toàn giao thông|Hành nghề quản lý dự án đầu tư xây dựng và chỉ huy trưởng công trường|Hành nghề khảo sát xây dựng|Hành nghề thiết kế, thẩm tra thiết kế xây dựng|Hành nghề tư vấn giám sát thi công xây dựng công trình|Hành nghề tư vấn lập quy hoạch đô thị và nông thôn|Kinh doanh dịch vụ lập quy hoạch, dự án, thiết kế, tổ chức thi công, tư vấn giám sát thi công dự án bảo quản, tu bổ và phục hồi di tích|Kinh doanh dịch vụ đo đạc và bản đồ
7120|Kiểm tra và phân tích kỹ thuật|Kinh doanh dịch vụ kiểm định kỹ thuật an toàn lao động|Kinh doanh dịch vụ kiểm định xe cơ giới|Kinh doanh dịch vụ thí nghiệm chuyên ngành xây dựng|Đăng kiểm tàu cá|Kinh doanh dịch vụ kiểm nghiệm, khảo nghiệm thuốc thú y (bao gồm thuốc thú y, thuốc thú y thủy sản, vắc xin, chế phẩm sinh học, vi sinh vật, hóa chất dùng trong thú y, thú y thủy sản)|Kinh doanh dịch vụ khảo nghiệm phân bón|Kinh doanh dịch vụ đánh giá sự phù hợp|Kinh doanh dịch vụ quan trắc môi trường
7211|Nghiên cứu khoa học và phát triển công nghệ trong lĩnh vực khoa học tự nhiên
7212|Nghiên cứu khoa học và phát triển công nghệ trong lĩnh vực khoa học kỹ thuật và công nghệ
7213|Nghiên cứu khoa học và phát triển công nghệ trong lĩnh vực khoa học y, dược
7214|Nghiên cứu khoa học và phát triển công nghệ trong lĩnh vực khoa học nông nghiệp|Kinh doanh dịch vụ khảo nghiệm thuốc bảo vệ thực vật
7221|Nghiên cứu khoa học và phát triển công nghệ trong lĩnh vực khoa học xã hội
7222|Nghiên cứu khoa học và phát triển công nghệ trong lĩnh vực khoa học nhân văn
7310|Quảng cáo
7320|Nghiên cứu thị trường và thăm dò dư luận
7330|Hoạt động quan hệ công chúng
7410|Hoạt động thiết kế chuyên dụng
7420|Hoạt động nhiếp ảnh
7430|Hoạt động phiên dịch
7491|Hoạt động môi giới và tiếp thị bằng sáng chế
7499|Hoạt động chuyên môn, khoa học và công nghệ khác còn lại chưa được phân vào đâu|Kinh doanh dịch vụ thẩm định giá|Kinh doanh dịch vụ hỗ trợ ứng dụng năng lượng nguyên tử|Kinh doanh dịch vụ đánh giá, thẩm định giá và giám định công nghệ|Kinh doanh dịch vụ giám định di vật, cổ vật|Kinh doanh dịch vụ dự báo, cảnh báo khí tượng thủy văn
7500|Hoạt động thú y|Kinh doanh dịch vụ xét nghiệm, phẫu thuật động vật|Kinh doanh dịch vụ tiêm phòng, chẩn đoán bệnh, kê đơn, chữa bệnh, chăm sóc sức khỏe động vật
7710|Cho thuê xe có động cơ
7721|Cho thuê thiết bị thể thao, vui chơi giải trí
7729|Cho thuê đồ dùng cá nhân và gia đình khác
7730|Cho thuê máy móc, thiết bị và đồ dùng hữu hình khác không kèm người điều khiển
7740|Cho thuê tài sản vô hình phi tài chính
7750|Hoạt động dịch vụ trung gian cho thuê đồ dùng hữu hình và tài sản vô hình phi tài chính
7810|Hoạt động của các trung tâm giới thiệu việc làm
7821|Cung ứng lao động tạm thời
7822|Cung ứng nguồn nhân lực khác|Kinh doanh dịch vụ đưa người lao động đi làm việc ở nước ngoài
7911|Đại lý lữ hành
7912|Điều hành tua du lịch|Kinh doanh dịch vụ lữ hành
7990|Hoạt động liên quan đến du lịch khác
8011|Dịch vụ điều tra và hoạt động bảo vệ tư nhân|Kinh doanh dịch vụ bảo vệ
8019|Dịch vụ bảo đảm an toàn khác
8110|Dịch vụ hỗ trợ tổng hợp
8121|Vệ sinh chung nhà cửa
8129|Dịch vụ vệ sinh khác
8130|Dịch vụ cảnh quan
8210|Hoạt động hành chính và hỗ trợ văn phòng
8220|Hoạt động dịch vụ liên quan đến các cuộc gọi
8230|Tổ chức giới thiệu và xúc tiến thương mại
8240|Hoạt động dịch vụ trung gian cho các hoạt động dịch vụ hỗ trợ kinh doanh chưa được phân vào đâu (trừ trung gian tài chính)
8291|Hoạt động dịch vụ hỗ trợ thanh toán, tín dụng|Kinh doanh dịch vụ xếp hạng tín nhiệm|Cung ứng dịch vụ thông tin tín dụng
8292|Dịch vụ đóng gói
8299|Hoạt động dịch vụ hỗ trợ kinh doanh khác còn lại chưa được phân vào đâu
8411|Hoạt động của Đảng Cộng sản, tổ chức chính trị - xã hội, hoạt động quản lý nhà nước nói chung và kinh tế tổng hợp
8412|Hoạt động quản lý nhà nước trong các lĩnh vực y tế, giáo dục, văn hóa và các dịch vụ xã hội khác (trừ môi trường và bảo đảm xã hội bắt buộc)
8413|Hoạt động quản lý nhà nước trong lĩnh vực môi trường
8414|Hoạt động quản lý nhà nước trong các lĩnh vực kinh tế chuyên ngành
8421|Hoạt động đối ngoại
8422|Hoạt động quốc phòng
8423|Hoạt động an ninh, trật tự an toàn xã hội
8430|Hoạt động bảo đảm xã hội bắt buộc
8511|Giáo dục nhà trẻ|Hoạt động giáo dục mầm non
8512|Giáo dục mẫu giáo
8521|Giáo dục tiểu học|Hoạt động giáo dục phổ thông
8522|Giáo dục trung học cơ sở
8523|Giáo dục trung học phổ thông
8531|Đào tạo sơ cấp|Hoạt động giáo dục nghề nghiệp
8532|Đào tạo trung cấp|Hoạt động giáo dục nghề nghiệp
8533|Đào tạo cao đẳng|Hoạt động giáo dục nghề nghiệp
8541|Đào tạo đại học|Hoạt động giáo dục đại học
8542|Đào tạo thạc sỹ
8543|Đào tạo tiến sỹ
8551|Giáo dục thể thao và giải trí
8552|Giáo dục văn hóa nghệ thuật
8553|Hoạt động đào tạo sử dụng phương tiện vận tải phi thương mại|Kinh doanh dịch vụ đào tạo lái xe ô tô
8554|Giáo dục dự bị đại học
8559|Giáo dục khác chưa được phân vào đâu|Kinh doanh dịch vụ đào tạo thuyền viên và người lái phương tiện thủy nội địa|Đào tạo, huấn luyện thuyền viên hàng hải và tổ chức tuyển dụng, cung ứng thuyền viên hàng hải|Kinh doanh dịch vụ đào tạo, huấn luyện nghiệp vụ nhân viên hàng không|Hoạt động của cơ sở giáo dục nước ngoài và phân hiệu cơ sở giáo dục nước ngoài|Hoạt động giáo dục thường xuyên
8561|Hoạt động dịch vụ trung gian cho các khóa học và gia sư
8569|Hoạt động hỗ trợ giáo dục khác|Kinh doanh dịch vụ đánh giá kỹ năng nghề|Kinh doanh dịch vụ sát hạch lái xe
8610|Hoạt động của các bệnh viện, trạm y tế|Kinh doanh dịch vụ khám bệnh, chữa bệnh
8620|Hoạt động của các phòng khám đa khoa, chuyên khoa và nha khoa
8691|Hoạt động dịch vụ trung gian cho các dịch vụ y tế, nha khoa và dịch vụ y tế khác
8692|Hoạt động y tế dự phòng
8693|Hoạt động của hệ thống cơ sở chỉnh hình, phục hồi chức năng
8699|Hoạt động y tế khác chưa được phân vào đâu|Kinh doanh dịch vụ tiến hành công việc bức xạ
8710|Hoạt động của các cơ sở nuôi dưỡng, điều dưỡng
8720|Hoạt động chăm sóc sức khoẻ người khuyết tật trí tuệ, thần kinh, tâm thần và người nghiện|Kinh doanh dịch vụ cai nghiện ma túy tự nguyện
8730|Hoạt động chăm sóc sức khoẻ người có công, người già và người khuyết tật không có khả năng tự chăm sóc
8791|Hoạt động dịch vụ trung gian cho các hoạt động chăm sóc tập trung
8799|Hoạt động chăm sóc tập trung khác chưa được phân vào đâu
8810|Hoạt động trợ giúp xã hội không tập trung đối với người có công, thương bệnh binh, người già và người khuyết tật
8890|Hoạt động trợ giúp xã hội không tập trung khác
9011|Hoạt động sáng tác văn học và sáng tác âm nhạc
9012|Hoạt động sáng tạo nghệ thuật thị giác
9019|Hoạt động sáng tạo nghệ thuật khác
9020|Hoạt động biểu diễn nghệ thuật
9031|Hoạt động của cơ sở và địa điểm nghệ thuật
9039|Hoạt động hỗ trợ khác cho sáng tạo nghệ thuật và biểu diễn nghệ thuật
9111|Hoạt động thư viện
9112|Hoạt động lưu trữ|Kinh doanh dịch vụ lưu trữ
9121|Hoạt động bảo tàng và sưu tập
9122|Hoạt động di tích lịch sử và di tích
9130|Bảo tồn, phục hồi và các hoạt động hỗ trợ khác cho di sản văn hóa
9141|Hoạt động của các vườn bách thảo và bách thú
9142|Hoạt động của khu bảo tồn thiên nhiên
9200|Hoạt động xổ số, cá cược và đánh bạc|Kinh doanh xổ số|Kinh doanh trò chơi có thưởng (bao gồm trò chơi điện tử có thưởng dành cho người nước ngoài, casino và đặt cược)
9311|Hoạt động của các cơ sở thể thao|Kinh doanh hoạt động thể thao của doanh nghiệp thể thao, câu lạc bộ thể thao chuyên nghiệp
9312|Hoạt động của các câu lạc bộ thể thao
9319|Hoạt động thể thao khác
9321|Hoạt động của các công viên vui chơi và công viên theo chủ đề
9329|Hoạt động vui chơi giải trí khác|Kinh doanh dịch vụ ka-ra-ô-kê (karaoke), vũ trường
9411|Hoạt động của các hiệp hội kinh doanh và nghiệp chủ
9412|Hoạt động của các hội nghề nghiệp
9420|Hoạt động của công đoàn
9491|Hoạt động của các tổ chức tôn giáo
9499|Hoạt động của các tổ chức khác chưa được phân vào đâu
9510|Sửa chữa, bảo dưỡng máy tính, thiết bị thông tin và truyền thông|Dịch vụ gia công, sửa chữa hàng hóa thuộc Danh mục sản phẩm công nghệ thông tin đã qua sử dụng cấm nhập khẩu cho thương nhân nước ngoài để tiêu thụ ở nước ngoài
9521|Sửa chữa, bảo dưỡng thiết bị nghe nhìn điện tử gia dụng
9522|Sửa chữa, bảo dưỡng thiết bị, đồ dùng gia đình
9523|Sửa chữa, bảo dưỡng giày, dép, hàng da và giả da
9524|Sửa chữa, bảo dưỡng giường, tủ, bàn, ghế và đồ nội thất tương tự
9529|Sửa chữa, bảo dưỡng xe đạp, đồng hồ, đồ dùng cá nhân và gia đình khác chưa được phân vào đâu
9531|Sửa chữa, bảo dưỡng ô tô và xe có động cơ khác
9532|Sửa chữa, bảo dưỡng mô tô, xe máy
9540|Hoạt động dịch vụ trung gian cho sửa chữa, bảo dưỡng máy tính, đồ dùng cá nhân và gia đình, ô tô, mô tô, xe máy và xe có động cơ khác
9610|Giặt là, làm sạch các sản phẩm dệt và lông thú
9621|Dịch vụ làm tóc
9622|Dịch vụ chăm sóc sắc đẹp và các hoạt động làm đẹp khác
9623|Dịch vụ spa và xông hơi|Kinh doanh dịch vụ xoa bóp
9630|Hoạt động dịch vụ phục vụ tang lễ và các dịch vụ liên quan
9640|Hoạt động trung gian cho dịch vụ cá nhân
9690|Hoạt động dịch vụ phục vụ cá nhân khác
9700|Hoạt động làm thuê công việc gia đình trong các hộ gia đình
9810|Hoạt động sản xuất các sản phẩm vật chất tự tiêu dùng của hộ gia đình
9820|Hoạt động sản xuất các sản phẩm dịch vụ tự tiêu dùng của hộ gia đình
9900|Hoạt động của các tổ chức và cơ quan quốc tế`;
var hkd = [];
HKD.split('\n').forEach(function(line){
  var p = line.split('|'), code = p[0], name = p[1];
  p.slice(2).forEach(function(d, i){ hkd.push({ v:'n'+code+'_'+(i+1), code:code, t:code+' - '+name, cond:d }); });
  hkd.push({ v:'n'+code+'_k', code:code, t:code+' - '+name, cond:'Khác' });
});
hkd.push({ v:'n_khac', code:'', t:'Khác', cond:'' });
var canhan = [
  { v:'ca_rong', t:'Buôn bán rong (buôn bán dạo)', cond:'Khác' },
  { v:'ca_vat', t:'Buôn bán vặt', cond:'Khác' },
  { v:'ca_quavat', t:'Bán quà vặt', cond:'Khác' },
  { v:'ca_chuyen', t:'Buôn chuyến', cond:'Khác' },
  { v:'ca_dichvu', t:'Thực hiện các dịch vụ: đánh giày, bán vé số, chữa khóa, sửa chữa xe, trông giữ xe, rửa xe, cắt tóc, vẽ tranh, chụp ảnh và các dịch vụ khác có hoặc không có địa điểm cố định', cond:'Khác' },
  { v:'ca_doclap', t:'Các hoạt động thương mại một cách độc lập, thường xuyên không phải đăng ký kinh doanh khác', cond:'Khác' },
  { v:'ca_luudong', t:'Kinh doanh lưu động là các hoạt động thương mại không có địa điểm cố định', cond:'Khác' },
  { v:'ca_khac', t:'Khác', cond:'' },
  { v:'ca_0311', code:'0311', t:'Khai thác thủy sản biển', cond:'Chi tiết: Khai thác thủy sản' },
  { v:'ca_0321', code:'0321', t:'Nuôi trồng thủy sản biển', cond:'Chi tiết: Kinh doanh thủy sản' }
];
window.BK_NGANH = { hkd: hkd, canhan: canhan };
})();

# Baokim – Prototype quy trình Onboard

Prototype giao diện quy trình onboard merchant của Baokim (5 bước: Dịch vụ → Kênh thanh toán → Chứng từ → Xác nhận thông tin → Tài khoản quyết toán).

## Cấu trúc

```
index.html            # Màn hình chính (giao diện onboard)
NganhPicker.dc.html   # Component bộ chọn ngành nghề (dùng lại ở nhiều nơi)
support.js            # Runtime render
```

> Các file tự nạp lẫn nhau qua đường dẫn tương đối, nên **phải chạy qua HTTP** (web server / GitHub Pages). Mở trực tiếp bằng `file://` sẽ lỗi tải file.

## Chạy trên máy (local)

Cần một web server tĩnh bất kỳ. Ví dụ với Python:

```bash
cd baokim-onboarding
python3 -m http.server 8000
```

Rồi mở http://localhost:8000 trên trình duyệt.

Hoặc với Node:

```bash
npx serve baokim-onboarding
```

## Đưa lên GitHub Pages

1. Tạo repo mới trên GitHub, đẩy toàn bộ nội dung thư mục này lên nhánh `main`.

   ```bash
   git init
   git add .
   git commit -m "Baokim onboarding prototype"
   git branch -M main
   git remote add origin https://github.com/<user>/<repo>.git
   git push -u origin main
   ```

2. Vào **Settings → Pages**, mục *Build and deployment*:
   - Source: **Deploy from a branch**
   - Branch: **main** / thư mục **/ (root)** → Save.

3. Chờ ~1 phút, giao diện sẽ chạy tại `https://<user>.github.io/<repo>/`.

## Ghi chú

- Toàn bộ dữ liệu là demo phía client, không gọi backend thật.
- Các phần bôi **đỏ** trong giao diện là nội dung bổ sung / thay đổi so với quy trình cũ.

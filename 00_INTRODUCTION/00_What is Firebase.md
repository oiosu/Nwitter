# 00_What is Firebase

![image](https://user-images.githubusercontent.com/99783474/211482461-9e218e1d-548e-4669-955c-efede4e8d5b7.png)

##### ๐ต Firebase๋ ์ฒ์์ ๋ฐ์ดํฐ๋ฒ ์ด์ค์ด์๊ณ  ๊ตฌ๊ธ์ ์ํด ํ์ฅํ๊ธฐ ์์ํ๋ค. 

##### ๐ต Firebase๋ ์์ฃผ ํ๋ฅญํ ๋ฐฑ์๋ ๊ธฐ๋ฅ๋ค์ ํฌ๊ดํ๊ณ  ๊ทธ ๊ธฐ๋ฅ๋ค์ ์ ๊ณตํด์ฃผ๊ณ  ์๋ค. 

1. ##### Cloud Firestore

   > ์ด ํ๋ก์ ํธ์์ ํ๋ก์ ํธ์์์ ๋ฐฑ์๋๋ Cloud Firestore๋ฅผ ์ฌ์ฉ
   >
   > ๋ฐ์ดํฐ ๋ฒ ์ด์ค ๊ด๋ จ ์ฝ๋ ์์ด ๋ฐ์ดํฐ๋ฒ ์ด์ค๋ฅผ ์ฌ์ฉํ๊ฒ ํด์ฃผ๋ ๊ฒ 

2. ##### Firebase ML(Machine Learning)

   > ๋ฐ๋ก ์ฌ์ฉ ๊ฐ๋ฅํ API์ ์ปค์คํ ๋ชจ๋ธ ๋ฐฐํฌ์ง์์ผ๋ก ๊ฐ๋ ฅํ ๋จธ์ ๋ฌ๋ ๊ธฐ๋ฅ์ ์ฑ์ ์ถ๊ฐ
   >
   > * Firebase ML ๋ชจ๋ธ ๋ฐฐํฌ๋ฅผ ์ฌ์ฉํ๋ฉด ๊ธฐ์กด TensorFlow Lite ๋ชจ๋ธ๋ก ์์ํ๋  ๊ณ ์  ๋ชจ๋ธ์ ํ์ตํ๋  ๊ด๊ณ์์ด ๋ฌด์ ์ผ๋ก ์ฌ์ฉ์์๊ฒ ๋ชจ๋ธ์ ๋งคํฌ ๊ฐ๋ฅ 
   > * ์ด ๋ฐฉ๋ฒ์ ํ์ํ  ๋๋ง ๊ธฐ๊ธฐ์์ ๋ชจ๋ธ์ ๋ค์ด๋ก๋ํ๋ฏ๋ก ์ด๊ธฐ ์ฑ ์ค์น ํฌ๊ธฐ๊ฐ ์ค์ด๋ ๋ค. 
   > * ์ ์ฒด ์ฑ์ ๋ค์ ๊ฒ์ํ์ง ์๊ณ ๋ ์ฌ๋ฌ ๋ชจ๋ธ์ A/B ํ์คํธํ๊ณ  ์ฑ๋ฅ์ ํ๊ฐํ๋ฉฐ ๋ชจ๋ธ์ ์ ๊ธฐ์ ์ผ๋ก ์๋ฐ์ดํธ ๊ฐ๋ฅ 
   > * Firebase Console์ ๋ชจ๋ธ์ ์๋ก๋ ํ๊ธฐ๋ง ํ๋ฉด ๊ตฌ๊ธ์์ ํด๋น ๋ชจ๋ธ์ ํธ์คํํ๊ณ  ์ฑ์ ๊ฒ์ฌ 
   > * ์ํ๋ ๊ฒฝ์ฐ, Firebase Admin SDK ๋ฅผ ์ฌ์ฉํ์ฌ ML ํ๋ก๋์ ํ์ดํ๋ผ์ธ์ด๋ Colab ๋ธํธ๋ถ์์ ๋ฐ๋ก ๋ชจ๋ธ์ ๋ฐฐํฌ ๊ฐ๋ฅ 
   > * AutoML Vision Edge ๋ฅผ ์ฌ์ฉํ๋ฉด ์ฌ์ฉ์ ์๊ตฌ์ฌํญ์ ๋ง๋ ์ปค์คํ ์ด๋ฏธ์ง ๋ถ๋ฅ ๋ชจ๋ธ์ ์์ฝ๊ฒ ์์ฑ
   > * Firebase ML์๋ ํ์คํธ ์ธ์, ์ด๋ฏธ์ง ๋ผ๋ฒจ์ง์ , ๋๋๋งํฌ ์ธ์๊ณผ ๊ฐ์ ์ผ๋ฐ์ ์ธ ๋ชจ๋ฐ์ผ ์ฌ์ฉ ์ฌ๋ก์ ๋ฐ๋ก ์ฌ์ฉ ๊ฐ๋ฅํ ํด๋ผ์ฐ๋ ๊ธฐ๋ฐ API ์งํฉ์ด ์ ๊ณต

3. ##### Cloud Functions 

   > ์์ฒด ์๋ฒ๋ฅผ ์ค์ ํ  ํ์ ์์ด ์๋ฒ ์ธก์์ ์ฑ ๋ก์ง์ ์์ฑํ๊ณ  ์คํํ๋ค. 
   >
   > ๊ธฐ๋ณธ์ ์ผ๋ก serverless function์ ๊ธฐ๋ฅ์ ์ ๊ณตํด์ฃผ๋๋ฐ ์ด๊ฒ์ AWS์ lambda์ ๋น์ท
   >
   > * ์๋ฒ๋ฅผ ๊ด๋ฆฌํ์ง ์๊ณ  ๋ชจ๋ฐ์ผ ๋ฐฑ์๋ ์ฝ๋ ์คํ (Cloud Functions๋ ์์ ํ ๊ด๋ฆฌํ Node.js ํ๊ฒฝ์์ ์คํ๋๋ ๋จ์ผ ๋ชฉ์  ์๋ฐ์คํฌ๋ฆฝํธ ํจ์์๋๋ค. ์ด ํจ์๋ ๊ฐ์ ๋์์ธ ํน์ ํ ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ  ๋๋ง ์คํ)
   > * ์ ์ง ๋ณด์ ์์ ๊ฐ์ : ๋ช๋ น์ด ํ๋๋ก ๊ตฌ๊ธ ์๋ฒ์ ์ฝ๋ ๋ฐฐํฌ ๊ฐ๋ฅ (SSH ์ธ์ฆ, ์๋ฒ ๊ตฌ์ฑ, ์ ๊ท ์๋ฒ ํ๋ก๋น์ ๋, ์ด์  ์๋ฒ ํ๊ธฐ ๋ฑ์ ์์์ด ๋ถํ์)
   > * ๋ก์ง์ ๋น๊ณต๊ฐ๋ก ์์ ํ๊ฒ ์ ์ง : ํด๋ผ์ด์ธํธ ์ธก์์ ์กฐ์ํ  ์ ์๋๋ก ์๋ฒ์์ ์ ํ๋ฆฌ์ผ์ด์ ๋ก์ง์ ์ ์ดํ๋ ๊ฒ์ด ๊ฐ์ฅ ์ข์( ํจ์๊ฐ ๋น๊ณต๊ฐ๋ก ์์ ํ๊ฒ ์ ์ง๋๋ฉฐ ๋ฆฌ๋ฒ์ค ์์ง๋์ด๋ง์ด ๋ถ๊ฐ๋ฅ)

4. ##### Cloud Storage 

   > AWS์ S3์ ๋น์ท, ๊ธฐ๋ณธ์ ์ผ๋ก ์๋ก๋์ ๊ธฐ๋ฅ
   >
   > ์ฑ์ด ํ๋กํ ํ์์์ ํ๋ก๋์์ ์ฆ์ ์ฌ์ฉ ๊ฐ๋ฅํ ์ํ๋ก ๋ฐ์ ํจ์ ๋ฐ๋ผ ์ฌ์ฉ์ ์ ์ ์ฝํ์ธ ๋ฅผ ๊ฐํธํ๊ฒ ์ ์ฅํ๊ณ  ์ ๊ณต๊ฐ๋ฅ 
   >
   > * ์ฌ์ฉ์์ ์ฌ์ง ๋ฐ ๋์์ ์ ์ฅ 
   > * ๊ตฌ๊ธ์ ๊ท๋ชจ๋ฅผ ํ์ฉํ ๋น๋ : Spotify ๋ฐ Google ํฌํ  ๊ฐ์ ์ฑ์ ์ฌ์ฉ๋๋ ๋์ผํ ๊ธฐ์ ๋ก ํ๋กํ ํ์์์ ํ๋ก๋์๊น์ง ์ํํ๊ฒ ์ฑ์ฅ ๊ฐ๋ฅ 
   > * ์์ ์ ์ธ ์๋ก๋ ๋ฐ ๋ค์ด๋ก๋ : ์ฑ์ ๋ชจ๋ฐ์ผ ์ฐ๊ฒฐ์ด ๋์ด์ง๊ณ  ๋ค์ ์ฐ๊ฒฐ๋  ๋ ์๋์ผ๋ก ์ ์ก์ด ์ผ์์ค์๋์๋ค๊ฐ ๋ค์ ์์๋๋ฏ๋ก ์ฌ์ฉ์์ ์๊ฐ๊ณผ ๋์ญํญ์ ์ ๊ฐํ๋ ํจ๊ณผ 
   > * ๊ฐ๋ ฅํ ์ฌ์ฉ์ ๊ธฐ๋ฐ ๋ณด์ : ์ ์ธ์  ๋ณด์ ๋ชจ๋ธ์ ์ฌ์ฉํ์ฌ ์ฌ์ฉ์ ID ๋๋ ํ์ผ ์์ฑ์ ๊ธฐ์ค์ผ๋ก ์์ธ์ค ํ์ฉ 

5. ##### Hosting 

   > ๋ง์ฝ, assets๋ค์ ๋ฐฐํฌํ๋ ค ํ๊ฑฐ๋ React Application์ ๋ฐฐํฌํ๊ณ ์ ํ๋ค๋ฉด Hosting ๋ํ ์ฌ์ฉ
   >
   > ๊ธ๋ก๋ฒ CDN์์ ์ง์ํ๋ฉฐ ๋น ๋ฅด๊ฒ ๋ก๋๋๋ ์์ ํ ์น ์ฌ์ดํธ๋ฅผ ๊ฐํธํ๊ฒ ๋ฐฐํฌ ๊ฐ๋ฅ 
   >
   > * ์ฌ์ดํธ๋ฅผ ๋ฐฐํฌํ๋ 3๋จ๊ณ 
   >   * 1) ๋ก์ปฌํ์คํธ : ๋ก์ปฌ๋ก ํธ์คํ๋ URL์์ ์น ์ฑ ์ด๊ธฐ
   >     2) ๋ณ๊ฒฝ ์ฌํญ ๋ฏธ๋ฆฌ๋ณด๊ธฐ ๋ฐ ๊ณต์  : ๊ณต์  ๊ฐ๋ฅํ ์์ ๋ฏธ๋ฆฌ๋ณด๊ธฐ ์ฑ๋์ ๋ฐฐํฌ 
   >     3) ๋ผ์ด๋ธ ๋ฐฐํฌ : ๋ผ์ด๋ธ ์ฑ๋์ ๋ณต์ ํ๊ฑฐ๋ ๋ก์ปฌ ํ๋ก์ ํธ ๋๋ ํฐ๋ฆฌ์์ ๋ฐฐํฌ

6. ##### Authentication

   > โ Firebase์ ์ค์ ํฌ์ธํธ 
   >
   > ์ฝ๋ ๋ช ์ค๋ง์ผ๋ก ์์ฌ์ด ์ฌ์ฉ์ ์ธ์ฆ, ๋ก๊ทธ์ธ, ์จ๋ณด๋ฉ์ ์ํ ์๋ ํฌ ์๋ ID ์๋ฃจ์์ ์ฑ์ ์ถ๊ฐํฉ๋๋ค. 
   >
   > * ๋ชจ๋  ํ๋ซํผ์์ ์์ฝ๊ฒ ๋ก๊ทธ์ธ : ์์ ํ ์ธ์ฆ ์์คํ์ ์์ฝ๊ฒ ๊ตฌ์ถํ๋๋ก ์ง์ํ๊ณ  ์ต์ข ์ฌ์ฉ์์ ๋ก๊ทธ์ธ ๋ฐ ์จ๋ณด๋ฉ ๊ฒฝํ์ ๊ฐ์ ํ๋ ๊ฒ
   >   : ์ด๋ฉ์ผ/๋น๋ฐ๋ฒํธ ๊ณ์ , ์ ํ ์ธ์ฆ, Google, Twitter, Facebook, GitHub ๋ก๊ทธ์ธ ๋ฑ์ ์ง์ํ๋ ์๋ ํฌ ์๋ ID ์๋ฃจ์์ ์ ๊ณต
   > * ์ ์ฐํ ์ฝ์ํ UI : FirebaseUI๋ ์ฌ์ฉ์ ๋ก๊ทธ์ธ์ UI ํ๋ฆ์ ์ฒ๋ฆฌํ๋ ์ฝ์ํ ์ธ์ฆ ์๋ฃจ์์ผ๋ก ๋ง์ถค์ค์ ์ด ๊ฐ๋ฅํ ์คํ์์ค ์๋ฃจ์ 
   >   : FirebaseUI ์ธ์ฆ ๊ตฌ์ฑ ์์๋ ํด๋๊ธฐ๊ธฐ ๋ฐ ์น์ฌ์ดํธ๋ฅผ ํตํ ์ธ์ฆ ๊ถ์ฅ์ฌํญ์ ๊ตฌํํ์ฌ ์ฑ์ ๋ก๊ทธ์ธ ๋ฐ ๊ฐ์ ์ ํ์ ๊ทธ๋ํํ๋ค. 
   > * ์ขํฉ์ ์ธ ๋ณด์ : Google ๋ก๊ทธ์ธ, Smart Lock, Chrome ๋น๋ฐ๋ฒํธ ๊ด๋ฆฌ์๋ฅผ ๊ฐ๋ฐํ ํ์์ ๊ตฌ์ถํ Firebase ๋ณด์์๋ ์ธ๊ณ ์ต๋ ๊ท๋ชจ์ ๊ณ์  ๋ฐ์ดํฐ๋ฒ ์ด์ค๋ฅผ ๊ด๋ฆฌํ๋ Google ๋ด๋ถ์ ์ ๋ฌธ ์ญ๋ํฌํจ
   > * ๋น ๋ฅธ ๊ตฌํ : ์ธ์ฆ ์์คํ์ ์ง์  ์ค์ ํ๋ ค๋ฉด ์๊ฐ์ด ๋ช ๊ฐ์์ด๋ ๊ฑธ๋ฆด ๋ฟ ์๋๋ผ ํฅํ ์์ง๋ฆฌ์ด๋งํ์ ์ง์์ ์ธ ์ ์ง๊ด๋ฆฌ ํ์ ํ์ง๋ง  Firebase ์ธ์ฆ์ ์ฌ์ฉํ๋ฉด 10์ค๋ ์ ๋๋ ์ฝ๋๋ง์ผ๋ก ์ฑ์ ์ธ์ฆ ์์คํ ์ ์ฒด๋ฅผ ์ค์ ํ๊ณ  ๊ณ์  ๋ณํฉ๊ณผ ๊ฐ์ ๋ณต์กํ ์ผ์ด์ค๊น์ง ์ฒ๋ฆฌ๊ฐ๋ฅ 

7. ##### Realtime Database 

   > `Realtiome Database is Firebase's original database` 	
   >
   > ๊ฐ๋ ฅํ ์ฌ์ฉ์ ๊ธฐ๋ฐ ๋ณด์์ผ๋ก ์จ/์คํ๋ผ์ธ์์ ์ค์๊ฐ์ ๊ฐ๊น๊ฒ JSON ๋ฐ์ดํฐ๋ฅผ ์ ์ฅํ๊ณ  ์ฌ์ฉ์ ๊ฐ์ ๋๊ธฐํ์์ฌ ์๋ฒ๋ฆฌ์ค ์ฑ์ ๋น๋ํ๋ค. 
   >
   > * JSON ๋ฐ์ดํฐ ์ค์๊ฐ ๋๊ธฐํ : Firebase ์ค์๊ฐ ๋ฐ์ดํฐ๋ฒ ์ด์ค๋ ์ค์๊ฐ์ผ๋ก ๋ฐ์ดํฐ๋ฅผ ์ ์ฅํ๊ณ  ์ฌ์ฉ์ ๊ฐ์ ๋๊ธฐํํ  ์ ์๋ ํด๋ผ์ฐ๋ ํธ์คํ JSON ๋ฐ์ดํฐ๋ฒ ์ด์ค 
   >
   >   (Cloud Firestore๋ฅผ ์ฌ์ฉํ๋ฉด ๊ธ๋ก๋ฒ ๊ท๋ชจ๋ก ์ฑ ๋ฐ์ดํฐ๋ฅผ ์ ์ฅ, ๋๊ธฐํ, ์ฟผ๋ฆฌ ๊ฐ๋ฅ)
   >
   > * ์์ฌ์ด ๊ธฐ๊ธฐ ๊ฐ ๊ณต๋ ์์ : ์ฌ์ฉ์๋ ์ค์๊ฐ ๋๊ธฐํ๋ฅผ ํตํด ์น์ด๋ ๋ชจ๋ฐ์ผ์์ ์์ฝ๊ฒ ๊ธฐ๊ธฐ์ ๋ฐ์ดํฐ์ ์ก์ธ์ค ํ์ฌ ๋ค๋ฅธ ์ฌ์ฉ์์ ๊ณต๋์์ ๊ฐ๋ฅ 
   >
   > * ์๋ฒ๋ฆฌ์ค ์ฑ ๋น๋ : ์ค์๊ฐ ๋ฐ์ดํฐ๋ฒ ์ด์ค๋ ๋ชจ๋ฐ์ผ ๋ฐ ์น SDK ์ ํจ๊ป ์ ๊ณต๋๋ฏ๋ก ์๋ฒ ์์ด๋ ์ฑ์ ๋น๋ ๊ฐ๋ฅ 
   >
   > * ์คํ๋ผ์ธ์ฉ์ผ๋ก ์ต์ ํ : ์ฌ์ฉ์๊ฐ ์คํ๋ผ์ธ์ผ๋ก ์ ํ๋๋ฉด ์ค์๊ฐ ๋ฐ์ดํฐ๋ฒ ์ด์ค SDK๊ฐ ๊ธฐ๊ธฐ์ ๋ก์ปฌ ์บ์๋ฅผ ์ฌ์ฉํ์ฌ ๋ณ๊ฒฝ์ฌํญ์ ์ ๊ณตํ๊ณ  ์ ์ฅ 
   >
   >   : ๊ธฐ๊ธฐ๊ฐ ์จ๋ผ์ธ์ผ๋ก ์ ํ๋๋ฉด ๋ก์ปฌ ๋ฐ์ดํฐ๊ฐ ์๋์ผ๋ก ๋๊ธฐํ 
   >
   > * ๊ฐ๋ ฅํ ์ฌ์ฉ์ ๊ธฐ๋ฐ ๋ณด์ : ์ค์๊ฐ ๋ฐ์ดํฐ๋ฒ ์ด์ค๋ Firebase ์ธ์ฆ๊ณผ ํตํฉ๋์ด ๊ฐ๋ฐ์์๊ฒ ๋จ์ํ๊ณ  ์ง๊ด์ ์ธ ์ธ์ฆ ์ ๊ณต 
   >   : ์ ์ธ์  ๋ณด์ ๋ชจ๋ธ์ ์ฌ์ฉํ์ฌ ์ฌ์ฉ์ ID ๋๋ ๋ฐ์ดํฐ ํจํด ์ผ์น๋ฅผ ๊ธฐ์ค์ผ๋ก ์ก์ธ์ค ํ์ฉ 



##### ๐ต Firebase๋ analytics ๋ ์ ๊ณตํด์ค๋ค. 

1. ##### Crashlytics 

   > application์ ์ถฉ๋ ๊ฐ์ ๊ฒ๋ค์ ๋ณผ ์ ์๊ฒ ํด์ค๋ค. 
   >
   > `ios`, `android`, `unity`์์๋ง ์ฌ์ฉ์ด ๊ฐ๋ฅ 

   

2. ##### Performance Monitoring

   > app์ ์ฑ๋ฅ์ ๋ณด์ฌ์ฃผ๋ ๊ธฐ๋ฅ  

   

3. ##### Test Lab

   >  ์น์ฌ์ดํธ๋ฅผ ๊ฐ์ข ๊ธฐ๊ธฐ๋ณ๋ก ํ์คํธ ํ  ์ ์๋๋ก ํด์ค๋ค. 



4. ##### App Distribution 

   > `ios`๋ `android` ์ ๋ฒ์  ๋ฐฐํฌ๋ฅผ ๋์์ค๋ค. (ํ์คํฐ๋ค์ ๋ชจ๋ฐ์ผ์ ํตํด)



---



##### ๐ต Firebase์ ๊ฒฝ์์ ํ๊ณ  ์๋ ๊ฒ์ AWS amplify ์ด๋ค. 

> ๊ฑฐ์ ๊ฐ์ ๊ธฐ๋ฅ์ด์ง๋ง, AWS amplify๋ GraphQL API, REST API, XR๋ฑ์ ์ง์ํด์ค๋ค. 



##### ๐ต Firebase๋ฅผ ์ ํํ ์ด์  

> ๋ง์ ์ฌ๋๋ค์ด ์ง์  ์ด์ฉ์ ํด์๊ณ , ์ปค๋ฎค๋ํฐ ๋ํ ๋ง๋ค. amplify๋ Firebase์ ๋นํด ํํ ๋ฆฌ์ผ์ด ์ ๋ค.



---




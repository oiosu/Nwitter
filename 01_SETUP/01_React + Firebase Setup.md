# 01_React + Firebase Setup

##### ◼ app 만들기 

```bash
npx create-react-app nwitter
```

![image](https://user-images.githubusercontent.com/99783474/212053030-e65219a7-16de-4d99-80e4-a2a86ad20227.png)



##### ◼ git remote add origin '생성한 저장소 URL'

```bash
git remote add origin https://github.com/oiosu/Nwitter
```



##### ◼ 필요없는 파일 삭제하기 

✔ 필요없는 것을 삭제한 `App.js` 코드 모습 & `package.json`에서 test 부분 삭제하기 

```javascript
import React from "react";

function App() {
  return <div></div>;
}

export default App;
```

![image](https://user-images.githubusercontent.com/99783474/212053076-4240b30a-bd6a-4a96-b2a0-27ab709854cd.png)



##### ◼ Firebase에서 프로젝트 생성하기 

![image](https://user-images.githubusercontent.com/99783474/212053097-40276b5f-b319-4d4c-b33e-2b57eaa6c2f3.png)

![image](https://user-images.githubusercontent.com/99783474/212053124-5405da2c-3652-4346-8e62-cfb9961ba39d.png)



##### ◼ Firebase 설치하기 

```bash
npm install --save firebase
```

```bash
npm i firebase@9.6.1
```



##### ◼  `firebase.js` 파일 생성 후 다음과 같이 코드 작성하기 

```javascript
import * as firebase from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyBIBW7g7LG1rrfpwXNxAlzCVZTCl9qJcaE",
    authDomain: "nwitter-30f9c.firebaseapp.com",
    projectId: "nwitter-30f9c",
    storageBucket: "nwitter-30f9c.appspot.com",
    messagingSenderId: "386027785370",
    appId: "1:386027785370:web:f788d785b6b060fd06a323"
  };

export default firebase.initializeApp(firebaseConfig);
```



##### ◼  서버 실행하기 

```bash
npm run start
```

![image](https://user-images.githubusercontent.com/99783474/212053160-8ea182e9-93a5-42ae-8b8d-d99e0ab09109.png)

> 에러사항 없이 잘 작동하는 것을 확인할 수 있다. 




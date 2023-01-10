# 01_React + Firebase Setup

##### ◼ app 만들기 

```bash
npx create-react-app nwitter
```

![image-20230110162741318](../imges/01_React + Firebase Setup/image-20230110162741318.png)



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

![image-20230110164042704](../imges/01_React + Firebase Setup/image-20230110164042704.png)



##### ◼ Firebase에서 프로젝트 생성하기 

![image-20230110164418904](../imges/01_React + Firebase Setup/image-20230110164418904.png)

![image-20230110164525933](../imges/01_React + Firebase Setup/image-20230110164525933.png)



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

![image-20230110165918978](../imges/01_React + Firebase Setup/image-20230110165918978.png)

> 에러사항 없이 잘 작동하는 것을 확인할 수 있다. 




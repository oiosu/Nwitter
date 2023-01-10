# 02_Securing the Keys

##### ◼ .env 파일 생성 

> env 파일에는 환경 변수들이 담겨져 있다. 

```javascript
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN, 
    projectId: process.env.REACT_APP_PROJECT_ID, 
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
  };

export default firebase.initializeApp(firebaseConfig);
```

```
REACT_APP_API_KEY=AIzaSyBIBW7g7LG1rrfpwXNxAlzCVZTCl9qJcaE
REACT_APP_AUTH_DOMAIN=nwitter-30f9c.firebaseapp.com
REACT_APP_PROJECT_ID=nwitter-30f9c
REACT_APP_STORAGE_BUCKET=nwitter-30f9c.appspot.com
REACT_APP_MESSAGINGSENDERID=386027785370
REACT_APP_APP_ID=1:386027785370:web:f788d785b6b060fd06a323
```

> create-react-app은 REACT_APP으로 시작하는 환경변수를 찾도록 자동으로 설정되어있다. 
>
> ##### 🤔 create-react-app은 REACT_APP_API_KEY를 실제 값들로 바꾸게 해준다. 



##### ◼ `.gitignore` 파일에 `.env` 포함하기 

> ##### .env 파일은 git으로부터 ignore 되고 있다. (= git 의 버전 관리 대상에 포함되지 않는다)



---

##### ✔ key 보안

서비스를 위해 빌드하고 그리고 웹사이트를 띄우면 create-react-app은 코드들을 실제 값들로 변환시킬 것이다.따라서 api key는  `AIzaSyBIBW7g7LG1rrfpwXNxAlzCVZTCl9qJcaE` 이러한 형식으로 보여질 것이다. 
서비스를 위해 빌드를 하게 되면 이런 식으로 될 수 밖에 없다. 

이것을 하는 이유는 결국, key들을 github에 업로드 해두기 싫기 때문에 하는 것이다. 하지만 결국엔 사용자들에게 보여지게 된다. (너무 심각하게 key를 숨기는 것에 몰두하지 않아도 된다. 보안에 대해 마지막에 배울 예정)

`.evn` 파일은 프로젝트의 최상위에 있어야한다. `package.json` 파일 옆에 있어야한다. 

---


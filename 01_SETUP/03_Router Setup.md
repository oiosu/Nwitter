# 03_Router Setup

##### βΌ react-router-dom  μ€μΉ

```bash
npm i react-router-dom@5.3.0
```

![image](https://user-images.githubusercontent.com/99783474/212054943-1607d293-f1c8-49a1-b2d5-b04575eb83cf.png)





##### βΌ `Router.js`

```js
import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};
export default AppRouter;
```



##### π€ Fragment? 

> λ§μ μμλ€μ render νκ³  μΆμ λ μ¬μ©νλ€. 



---

```
useState(false);
```

![image](https://user-images.githubusercontent.com/99783474/212054974-a7f723d7-db01-4811-9e61-62facceed8ca.png)

```
useState(true);
```

![image](https://user-images.githubusercontent.com/99783474/212054997-e4e81644-2b88-4f35-b6d6-305ae9ee0190.png)

---




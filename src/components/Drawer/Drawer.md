```js
import { useState } from 'react';
import Button from '../Button/Button';
const [isOpen, setisOpen] = useState(false);
const [isOpen1, setisOpen1] = useState(false);
<div>
  <Button bgColor="primary" color="white" size="xl" rounded="full" onClick={() => setisOpen(true)}>
    Button
  </Button>

  <Drawer
    open={isOpen}
    onDismiss={() => setisOpen(false)}
    position="bottom"
    backgroundColor="accent"
    size="350px"
    buttonExit
  >
    {/* Edicion libre */}
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
      }}
    >
      <div>
        <h1>Test</h1>
        <hr />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, reprehenderit unde, quas
        facere aspernatur, sint iste voluptates ut eum nulla quasi beatae non reiciendis sequi
        corporis cupiditate quae mollitia! Animi? Illum ea error nemo, perspiciatis iusto, velit
        esse sequi cum possimus incidunt vero, delectus eaque ipsum ducimus eum expedita rem
        voluptatem eligendi facere temporibus nesciunt quaerat eveniet aliquam! Atque, sint.
      </p>
      <Button bgColor="secondary" color="white" size="xl" onClick={() => setisOpen(false)}>
        Grabar
      </Button>
    </div>
  </Drawer>
  <Button bgColor="secondary" color="white" size="xl" rounded="full" onClick={() => setisOpen1(true)}>
    Button
  </Button>
  <Drawer
    open={isOpen1}
    onDismiss={() => setisOpen1(false)}
    position="right"
    backgroundColor="primary"
    size="350px"
    buttonExit
  >
    {/* Edicion libre */}
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
      }}
    >
      <div>
        <h1>Test</h1>
        <hr />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, reprehenderit unde, quas
        facere aspernatur, sint iste voluptates ut eum nulla quasi beatae non reiciendis sequi
        corporis cupiditate quae mollitia! Animi? Illum ea error nemo, perspiciatis iusto, velit
        esse sequi cum possimus incidunt vero, delectus eaque ipsum ducimus eum expedita rem
        voluptatem eligendi facere temporibus nesciunt quaerat eveniet aliquam! Atque, sint.
      </p>
      <Button bgColor="secondary" color="white" size="xl" onClick={() => setisOpen(false)}>
        Grabar
      </Button>
    </div>
  </Drawer>
</div>;
```

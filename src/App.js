import { useEffect, useState } from 'react';
import './app.css';
import { Button, Modal, Drawer, Skeleton, Slider, Switch, Spinner,Input} from './components';
// import sourceImage from './components/Modal/modal.jpg'
import { ModalBody, ModalHeader } from './components/Modal/ModalElements';
import useModal from './components/Modal/modalHook';

import Avatar from './assets/img/avatar.jpg'
function App() {
  const {showModal, openModal, setShowModal} = useModal();
  const [value, setValue] = useState(5);
  const [isOpen, setisOpen] = useState(false);
  const [temp, setTemp] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setTemp(false);
    }, 4000);
  }, [])
  return (
    <div className="wrapper">
      <h1 className="title">Sistemas de componentes</h1>
    
      {/* Ejemplos SKELETON */}
      <div className="container">
        {/* Linea individual*/}
        <div className="container-component">
          <h2>Skeleton</h2>
          <Skeleton height={20} />
          {/* Skeleton con texto */}
          <Skeleton>
            <h1>text</h1>
            <h1>text</h1>
            <h1>text</h1>
          </Skeleton>
          {/* circulo con parametros */}
          <Skeleton type="CIRCLE" size={5} />
          {/* Circulo sin parametros */}
          <Skeleton type="CIRCLE" />
          {/* Circulo al lado de parrafo */}
          <div style={{ display: 'flex', width: '100%' }}>
            <Skeleton type="CIRCLE" size={5} />
            <div style={{ width: '100%' }}>
              <Skeleton height={20}  />
              <Skeleton height={20}  />
            </div>
          </div>
          {temp ? <div style={{ display: 'flex', width: '100%' }}>
            <Skeleton type="CIRCLE" size={5} />
            <div style={{ width: '100%' }}>
              <Skeleton height={20}  />
              <Skeleton height={20}  />
            </div>
          </div> : <div style={{ display: 'flex', width: '100%' }}>
            <img src={Avatar} alt="temp" style={{width:'50px',height={50} , borderRadius:'50%'}}/>
            <div style={{ width: '100%', padding:'10px 15px'}}>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A iusto, quod sunt magni saepe animi assumenda adipisci deleniti laudantium harum?</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quos dolorum rerum perferendis provident doloribus quae vel in mollitia autem.</p>
            </div>
          </div>}
        </div>
        
        <div className="container-component">
          <h2>Buttons</h2>
          {/* Ejemplos Botones */}
          {/* Boton por defecto */}
          <Button>
            Button
          </Button>
          {/* Boton con backgroud, tamaño, border-radius y deshabilitado */}
          <Button bgColor="danger" size="md" rounded="soft" color="white" full isDisabled>
            Button
          </Button>
            {/* Boton con backgroud, tamaño, border-radius , deshabilitado y con sombreado */}
          <Button bgColor="success" color="white" isShadow={true} size="lg" isDisabled>
            Button
          </Button>
          {/* Boton con backgroud, tamaño, border-radius , deshabilitado y con tamaño maximo a su contenedor*/}
          <Button bgColor="primary" color="white" size="xl" rounded="full" outliner={true} outlinerColor="warning">
            Button
          </Button>
           {/* Boton con backgroud, tamaño, border-radius , deshabilitado y con sombreado */}
          <Button bgColor="accent" color="white" isShadow={true} size="sm" rounded="soft">
            Button
          </Button>
        </div>


        <div className="container-component">
          <h2>Switch</h2>
          {/* Ejemplos Switch */}
          {/* Switch por defecto*/}
          <Switch/>
          {/* Switch con id establecido*/}
          <Switch id="idTest1" />
          {/* Switch con background*/}
          <Switch bgColor="success" />
          {/* Switch por defecto a la derecha */}
          <Switch  bgColor="primary" defaultRight  />
          {/* Switch activado */}
          <Switch bgColor="accent" isChecked  />
        </div>
        
        <div className="container-component">
          <h2>Modal</h2>
          <Button bgColor="red" isShadow={true} size="md" rounded="soft" color="white "onClick={openModal}>
            I'am modal
          </Button>
          
          <Modal showModal={showModal} setShowModal={setShowModal}  >
            <ModalHeader>Are you ready?</ModalHeader>
            <ModalBody>Get exclusive access to our next launch. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis minima ratione placeat facere illo fuga non id aliquam cumque molestias! </ModalBody>
            <Button bgColor="indigo" isShadow={true} size="xl" rounded="full">
              Button
            </Button>
          </Modal>
        </div>

        <div className="container-component">
          <h2>Spinner</h2>
          <Spinner size="sm" color="warning"/>
          <Spinner size="md" color="danger"/>
          <Spinner size="lg" color="primary"/>
        </div>

        <div className="container-component">
          <h2>Input</h2>
          {/* Ejemplos Input */}
          {/* Input por defecto */}
          <Input  placeholder="Escribe aqui!" type="email"/>
          {/* Input con background y color */}
          <Input bgColor="purple" color="white" placeholder="Escribe aqui!" type="email"/>
          {/* input con size establecido */}
          <Input size="xl" bgColor="green" color="white" placeholder="Escribe aqui!" type="email"/>
          {/* input full width */}
          <Input full bgColor="yellow" color="white" placeholder="Escribe aqui!" type="email"/>
          {/* input con sombras */}
          <Input isShadow bgColor="yellow" color="white" placeholder="Escribe aqui!" type="email"/>
          {/* input con border radius */}
          <Input rounded="full" bgColor="blue" color="white" placeholder="Escribe aqui!" type="email"/>
          {/* input deshabilitado */}
          <Input isDisabled bgColor="red" color="white" placeholder="Escribe aqui!" type="email"/>
          {/* input con outline */}
          <Input outliner outlinerColor="red" bgColor="red" placeholder="Escribe aqui!" type="email"/>
        </div>

        

        
      <div className="container-component">
        <h2>Slider</h2>
        <div style={{ display: 'flex', width: '100%', padding: '1rem 2rem'}}>
          <Slider
            min={0}
            max={500}
            step={1}
            orientation="horizontal"
            bgThumb="primary"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            full
          />
        
          <h1>{value}</h1>
        </div>
      </div>
      
      <div className="container-component">
        <h2>Drawer</h2>
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
      </div>
      </div>

      
    </div>
  );
}

export default App;

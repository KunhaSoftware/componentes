
import React from "react";
import { hot } from 'react-hot-loader/root';
import { Button } from "./lib/components/Button";

function action(){
  alert('ok')
}

const App = () => {
  return <Button text={'SALVAR'} action={action} />
}

export default hot(App);

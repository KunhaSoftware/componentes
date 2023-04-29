
import React from 'react';
import { action } from '@storybook/addon-actions';

import ButtonComponent from '../lib/components/Button/ButtonComponent';

export default {
  component: ButtonComponent,
  title: 'Botões',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

export const Primary = () => <ButtonComponent text={'Primario'} action={() => console.log('função')} type={'primary'} actionDescription={'ação'}/>;

export const Secondary = () => <ButtonComponent text={'Secundario'} action={() => console.log('função')} type={'secondary'} actionDescription={'ação'}/>;

export const success = () => <ButtonComponent text={'Sucesso'} action={() => {}} type={'success'} actionDescription={'ação'}/>;

export const warning = () => <ButtonComponent text={'Alerta'} action={() => { alert('Alerta') }} type={'warning'} actionDescription={'ação'}/>;

export const danger = () => <ButtonComponent text={'Erro'} action={() => { throw 42 }} type={'danger'} actionDescription={'ação'}/>;

export const info = () => <ButtonComponent text={'Informativo'} action={() => alert('informativo')} type={'info'} actionDescription={'ação'}/>;

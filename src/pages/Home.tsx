import { IonFooter, IonPage, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react';
import './Home.css';
import { useState } from 'react';
import Page from '../components/Page';

const Home: React.FC = () => {
  const [ activeTab, setActiveTab ] = useState<string|undefined>('tab1');

  return (
    <IonPage>
      <Page visible={(activeTab === 'tab1')} title='Tab 1' />
      <Page visible={(activeTab === 'tab2')} title='Tab 2' />
      <IonFooter>
        <IonToolbar color='danger'>
          <IonSegment
            value={activeTab}
            onIonChange={e => setActiveTab(e.detail.value)}
          >
            <IonSegmentButton value='tab1'>Tab 1</IonSegmentButton>
            <IonSegmentButton value='tab2'>Tab 2</IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;

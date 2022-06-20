import { closeOutline, informationCircleOutline } from 'ionicons/icons';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar, useIonActionSheet } from '@ionic/react';

const Page: React.FC<any> = ({ visible, title }) => {
  const items = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  const [ showIonActionSheet, dismissIonActionSheet ] = useIonActionSheet();

  return (
    <div className={(visible) ? '' : 'ion-hide'}>
      <IonHeader>
        <IonToolbar color='danger'>
          <IonTitle>ion-action-sheet-test - {title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {items.map((i: number) =>
            <IonItem button key={`Card${i}`} onClick={() => {
              showIonActionSheet({
                buttons: [{
                  text: 'Button 1',
                  icon: informationCircleOutline,
                  handler: () => console.log('Button 1')
                }, {
                  text: 'Button 2',
                  icon: informationCircleOutline,
                  handler: () => console.log('Button 2')
                }, {
                  text: 'Cancel',
                  icon: closeOutline,
                  role: 'cancel',
                  handler: dismissIonActionSheet
                }]
              });
            }}><IonLabel>Line 1<br />Line 2<br />Line 3<br />Line 4<br />Line 5<br />Line 6</IonLabel>
            </IonItem>
          )}
        </IonList>
      </IonContent>
    </div>
  );
};

export default Page;

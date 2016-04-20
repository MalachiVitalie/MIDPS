//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop

#include "counter_unit.h"
#include "main_unit.h"
//---------------------------------------------------------------------------
#pragma package(smart_init)
#pragma resource "*.dfm"
TFCounter *FCounter;
//---------------------------------------------------------------------------
__fastcall TFCounter::TFCounter(TComponent* Owner)
        : TForm(Owner)
{
counterValue = 0;
}

void TFCounter::increment() {
counterValue++;
}
void TFCounter::decrement() {
counterValue--;
}
int TFCounter::getValueCounter() {
return counterValue;
}

//---------------------------------------------------------------------------
void __fastcall TFCounter::btnExitClick(TObject *Sender)
{
FCounter->Close();
}
//---------------------------------------------------------------------------
void __fastcall TFCounter::FormClose(TObject *Sender, TCloseAction &Action)
{
FMain->Show();
}
//---------------------------------------------------------------------------
void __fastcall TFCounter::btnUpClick(TObject *Sender)
{
FCounter->decrement();
Label2->Caption = "Decrementarea." ;
Edit1->Text = FCounter->getValueCounter();
}
//---------------------------------------------------------------------------

void __fastcall TFCounter::btnDownClick(TObject *Sender)
{
FCounter->increment();
Label2->Caption = "Incrementarea.";
Edit1->Text = FCounter->getValueCounter();
}
//---------------------------------------------------------------------------







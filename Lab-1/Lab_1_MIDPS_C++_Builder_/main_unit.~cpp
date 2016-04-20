//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop

#include "main_unit.h"
#include "counter_unit.h"
#include "chronometer_unit.h"
#include "bar_graph_unit.h"

//---------------------------------------------------------------------------
#pragma package(smart_init)
#pragma resource "*.dfm"
TFMain *FMain;
//---------------------------------------------------------------------------
__fastcall TFMain::TFMain(TComponent* Owner)
        : TForm(Owner)
{
}
//---------------------------------------------------------------------------
void __fastcall TFMain::Button1Click(TObject *Sender)
{
FMain->Hide();
FCounter->ShowModal();
}
//---------------------------------------------------------------------------

void __fastcall TFMain::Button2Click(TObject *Sender)
{
FMain->Hide();
FChronometer->ShowModal();
}
//---------------------------------------------------------------------------

void __fastcall TFMain::Button3Click(TObject *Sender)
{
FMain->Hide();
FBarGraph->ShowModal();
}
//---------------------------------------------------------------------------


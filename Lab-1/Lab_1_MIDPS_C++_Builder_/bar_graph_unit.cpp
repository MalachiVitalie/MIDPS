//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop

#include "bar_graph_unit.h"
#include "main_unit.h"
#include "dos.h"
#include "stdio.h"
#include "time.h"
//---------------------------------------------------------------------------
#pragma package(smart_init)
#pragma resource "*.dfm"

struct date d;
struct time t;

int valueY = 0;
int valueX = 0;

TFBarGraph *FBarGraph;
//---------------------------------------------------------------------------
__fastcall TFBarGraph::TFBarGraph(TComponent* Owner)
        : TForm(Owner)
{
std::srand(std::time(NULL));
valueY = rand() % 151;
Panel2->Height = valueY;
PaintBox1->Canvas->MoveTo(0, valueY);
}
//---------------------------------------------------------------------------
void __fastcall TFBarGraph::btnExitClick(TObject *Sender)
{
FBarGraph->Close();
}
//---------------------------------------------------------------------------
void __fastcall TFBarGraph::FormClose(TObject *Sender,
      TCloseAction &Action)
{
FMain->Show();
}
//---------------------------------------------------------------------------
void __fastcall TFBarGraph::Timer1Timer(TObject *Sender)
{
char buf[25];
getdate(&d);
gettime(&t);
sprintf(buf,"%02d:%02d:%02d %02d-%02d-%4d",
t.ti_hour,t.ti_min,t.ti_sec,d.da_day,d.da_mon,d.da_year);
Edit1->Text=(AnsiString)buf;
}
//---------------------------------------------------------------------------

void __fastcall TFBarGraph::btnStartClick(TObject *Sender)
{
Timer2->Enabled = true;
btnStart->Enabled = false;
btnStop->Enabled = true;
}
//---------------------------------------------------------------------------
void __fastcall TFBarGraph::Timer2Timer(TObject *Sender)
{
valueY = rand() % 100;
valueX += (rand() % 5) + 0.5;
Panel2->Height = valueY;
PaintBox1->Canvas->LineTo(valueX, valueY);
if (valueX > 100)
{
TRect source,destination;
source=Rect(0,0,169,169);
destination=Rect(-(168 - valueX),0,170 - (169 - valueX),169);
PaintBox1->Canvas->CopyRect(destination,PaintBox1->Canvas,source);
valueX -= (169 - valueX);
}
PaintBox1->Canvas->MoveTo(valueX, valueY);
}
//---------------------------------------------------------------------------
void __fastcall TFBarGraph::btnStopClick(TObject *Sender)
{
Timer2->Enabled = false;
btnStart->Enabled = true;
btnStop->Enabled = false;
}
//---------------------------------------------------------------------------

void __fastcall TFBarGraph::PaintBox1Paint(TObject *Sender)
{
  TRect dreptunghi;
  PaintBox1->Canvas->Pen->Color = clRed;
  PaintBox1->Canvas->Pen->Width = 1;
  PaintBox1->Canvas->Brush->Style = bsCross;
  PaintBox1->Canvas->Brush->Color = clGray;
  PaintBox1->Canvas->FloodFill(10, 10, clGray, fsBorder);
}
//---------------------------------------------------------------------------








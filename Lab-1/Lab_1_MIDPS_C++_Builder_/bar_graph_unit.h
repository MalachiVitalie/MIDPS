//---------------------------------------------------------------------------

#ifndef bar_graph_unitH
#define bar_graph_unitH
//---------------------------------------------------------------------------
#include <Classes.hpp>
#include <Controls.hpp>
#include <StdCtrls.hpp>
#include <Forms.hpp>
#include <ExtCtrls.hpp>
//---------------------------------------------------------------------------
class TFBarGraph : public TForm
{
__published:	// IDE-managed Components
        TButton *btnStart;
        TButton *btnStop;
        TButton *btnExit;
        TTimer *Timer1;
        TTimer *Timer2;
        TEdit *Edit1;
        TLabel *Label1;
        TLabel *Label2;
        TPanel *Panel1;
        TPanel *Panel2;
        TPaintBox *PaintBox1;
        void __fastcall btnExitClick(TObject *Sender);
        void __fastcall FormClose(TObject *Sender, TCloseAction &Action);
        void __fastcall Timer1Timer(TObject *Sender);
        void __fastcall btnStartClick(TObject *Sender);
        void __fastcall Timer2Timer(TObject *Sender);
        void __fastcall btnStopClick(TObject *Sender);
        void __fastcall PaintBox1Paint(TObject *Sender);
private:	// User declarations
public:		// User declarations
        __fastcall TFBarGraph(TComponent* Owner);
};
//---------------------------------------------------------------------------
extern PACKAGE TFBarGraph *FBarGraph;
//---------------------------------------------------------------------------
#endif

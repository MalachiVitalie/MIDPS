//---------------------------------------------------------------------------

#ifndef chronometer_unitH
#define chronometer_unitH
//---------------------------------------------------------------------------
#include <Classes.hpp>
#include <Controls.hpp>
#include <StdCtrls.hpp>
#include <Forms.hpp>
#include <ExtCtrls.hpp>
//---------------------------------------------------------------------------
class TFChronometer : public TForm
{
__published:	// IDE-managed Components
        TButton *btnStart;
        TButton *btnStop;
        TButton *btnZero;
        TButton *btnExit;
        TEdit *Edit1;
        TEdit *Edit2;
        TLabel *Label1;
        TLabel *Label2;
        TTimer *Timer1;
        TTimer *Timer2;
        void __fastcall btnExitClick(TObject *Sender);
        void __fastcall FormClose(TObject *Sender, TCloseAction &Action);
        void __fastcall btnStartClick(TObject *Sender);
        void __fastcall Timer2Timer(TObject *Sender);
        void __fastcall btnStopClick(TObject *Sender);
        void __fastcall btnZeroClick(TObject *Sender);
        void __fastcall Timer1Timer(TObject *Sender);
private:	// User declarations
public:		// User declarations
        __fastcall TFChronometer(TComponent* Owner);
};
//---------------------------------------------------------------------------
extern PACKAGE TFChronometer *FChronometer;
//---------------------------------------------------------------------------
#endif

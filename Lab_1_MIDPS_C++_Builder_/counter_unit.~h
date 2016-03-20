//---------------------------------------------------------------------------

#ifndef counter_unitH
#define counter_unitH
//---------------------------------------------------------------------------
#include <Classes.hpp>
#include <Controls.hpp>
#include <StdCtrls.hpp>
#include <Forms.hpp>
//---------------------------------------------------------------------------
class TFCounter : public TForm
{
__published:	// IDE-managed Components
        TButton *btnUp;
        TButton *btnDown;
        TButton *btnExit;
        TEdit *Edit1;
        TLabel *Label1;
        TLabel *Label2;
        void __fastcall btnExitClick(TObject *Sender);
        void __fastcall FormClose(TObject *Sender, TCloseAction &Action);
        void __fastcall btnUpClick(TObject *Sender);
        void __fastcall btnDownClick(TObject *Sender);
private:
        int counterValue;	// User declarations
public:		// User declarations
        __fastcall TFCounter(TComponent* Owner);
        void increment();
        void decrement();
        int getValueCounter();
};
//---------------------------------------------------------------------------
extern PACKAGE TFCounter *FCounter;
//---------------------------------------------------------------------------
#endif

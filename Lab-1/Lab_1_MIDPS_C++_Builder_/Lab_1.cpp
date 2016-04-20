//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop
//---------------------------------------------------------------------------
USEFORM("main_unit.cpp", FMain);
USEFORM("counter_unit.cpp", FCounter);
USEFORM("chronometer_unit.cpp", FChronometer);
USEFORM("bar_graph_unit.cpp", FBarGraph);
//---------------------------------------------------------------------------
WINAPI WinMain(HINSTANCE, HINSTANCE, LPSTR, int)
{
        try
        {
                 Application->Initialize();
                 Application->CreateForm(__classid(TFMain), &FMain);
                 Application->CreateForm(__classid(TFCounter), &FCounter);
                 Application->CreateForm(__classid(TFChronometer), &FChronometer);
                 Application->CreateForm(__classid(TFBarGraph), &FBarGraph);
                 Application->Run();
        }
        catch (Exception &exception)
        {
                 Application->ShowException(&exception);
        }
        catch (...)
        {
                 try
                 {
                         throw Exception("");
                 }
                 catch (Exception &exception)
                 {
                         Application->ShowException(&exception);
                 }
        }
        return 0;
}
//---------------------------------------------------------------------------

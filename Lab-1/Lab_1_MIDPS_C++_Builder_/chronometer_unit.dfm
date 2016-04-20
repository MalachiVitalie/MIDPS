object FChronometer: TFChronometer
  Left = 528
  Top = 124
  Width = 465
  Height = 330
  Caption = '                                  MIDPS Sarcina 2'
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'MS Sans Serif'
  Font.Style = []
  OldCreateOrder = False
  Position = poDesktopCenter
  OnClose = FormClose
  PixelsPerInch = 96
  TextHeight = 13
  object Label1: TLabel
    Left = 80
    Top = 8
    Width = 344
    Height = 20
    Caption = 'Realizarea unui  cronometru in C++ Builder'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clRed
    Font.Height = -16
    Font.Name = 'MS Sans Serif'
    Font.Style = [fsBold]
    ParentFont = False
  end
  object Label2: TLabel
    Left = 104
    Top = 160
    Width = 241
    Height = 24
    Caption = 'C++ Builder CRONOMETRU'
    Font.Charset = RUSSIAN_CHARSET
    Font.Color = clRed
    Font.Height = -19
    Font.Name = 'MS Sans Serif'
    Font.Style = []
    ParentFont = False
  end
  object btnStart: TButton
    Left = 8
    Top = 184
    Width = 75
    Height = 25
    Hint = 'Start/Resume Cronometru'
    Caption = 'START'
    ParentShowHint = False
    ShowHint = True
    TabOrder = 0
    OnClick = btnStartClick
  end
  object btnStop: TButton
    Left = 8
    Top = 216
    Width = 75
    Height = 25
    Hint = 'Stop Cronometru'
    Caption = 'STOP'
    ParentShowHint = False
    ShowHint = True
    TabOrder = 1
    OnClick = btnStopClick
  end
  object btnZero: TButton
    Left = 8
    Top = 248
    Width = 75
    Height = 25
    Hint = 'Anuleaza Cronometru'
    Caption = 'ZERO'
    ParentShowHint = False
    ShowHint = True
    TabOrder = 2
    OnClick = btnZeroClick
  end
  object btnExit: TButton
    Left = 360
    Top = 248
    Width = 75
    Height = 25
    Hint = 'Iesire'
    Caption = 'Exit'
    ParentShowHint = False
    ShowHint = True
    TabOrder = 3
    OnClick = btnExitClick
  end
  object Edit1: TEdit
    Left = 176
    Top = 48
    Width = 145
    Height = 24
    Hint = 'Data si Ora curenta'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'MS Sans Serif'
    Font.Style = [fsBold]
    ParentFont = False
    ParentShowHint = False
    ShowHint = True
    TabOrder = 4
    Text = 'Edit1'
  end
  object Edit2: TEdit
    Left = 112
    Top = 208
    Width = 185
    Height = 24
    Hint = 'Valoarea Cronometrului'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'MS Sans Serif'
    Font.Style = [fsBold]
    ParentFont = False
    ParentShowHint = False
    ShowHint = True
    TabOrder = 5
    Text = '0'
  end
  object Timer1: TTimer
    OnTimer = Timer1Timer
    Left = 8
    Top = 8
  end
  object Timer2: TTimer
    Enabled = False
    Interval = 100
    OnTimer = Timer2Timer
    Left = 8
    Top = 40
  end
end

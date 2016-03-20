object FCounter: TFCounter
  Left = 374
  Top = 224
  Width = 441
  Height = 255
  Caption = 'MIDPS Sarcina 1'
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
    Left = 160
    Top = 8
    Width = 251
    Height = 20
    Caption = 'Incrementare decrementare contor.'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clRed
    Font.Height = -16
    Font.Name = 'MS Sans Serif'
    Font.Style = []
    ParentFont = False
  end
  object Label2: TLabel
    Left = 80
    Top = 48
    Width = 5
    Height = 16
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'MS Sans Serif'
    Font.Style = [fsBold]
    ParentFont = False
  end
  object btnUp: TButton
    Left = 8
    Top = 144
    Width = 75
    Height = 25
    Hint = 'Decrementare Contor'
    Caption = 'DOWN'
    ParentShowHint = False
    ShowHint = True
    TabOrder = 0
    OnClick = btnUpClick
  end
  object btnDown: TButton
    Left = 8
    Top = 72
    Width = 75
    Height = 25
    Hint = 'Incrementare Contor'
    Caption = 'UP'
    ParentShowHint = False
    ShowHint = True
    TabOrder = 1
    OnClick = btnDownClick
  end
  object btnExit: TButton
    Left = 344
    Top = 184
    Width = 75
    Height = 25
    Hint = 'Iesire'
    Caption = 'Exit'
    ParentShowHint = False
    ShowHint = True
    TabOrder = 2
    OnClick = btnExitClick
  end
  object Edit1: TEdit
    Left = 88
    Top = 112
    Width = 50
    Height = 21
    Hint = 'Valoarea Curenta a contorului'
    ParentShowHint = False
    ShowHint = True
    TabOrder = 3
    Text = '0'
  end
end

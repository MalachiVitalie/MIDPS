using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class MenuManager : MonoBehaviour {	

	public Text scoreText;
	private int score;

	private void Start(){
		score = PlayerPrefs.GetInt ("PlayerScore");
		scoreText.text = "Highscore: " + score.ToString();
	}

	public void ToGame(){
		Application.LoadLevel ("Scene1");
	}



}

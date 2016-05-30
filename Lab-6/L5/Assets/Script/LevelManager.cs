using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class LevelManager : MonoBehaviour {
	public static LevelManager Instance{ set; get;}

	private int hitPoint = 3;
	private int scoree = 0;

	public Text scoreText;
	public Text hitpointText;

	public Transform spownPosition;
	public Transform playerTransform;

	private void Awake(){
		Instance = this;
		scoreText.text = "Curent Score: " + scoree.ToString();
		hitpointText.text = "Hitpoint: " + hitPoint.ToString();
	}

	private void Update(){
		
		if (playerTransform.position.y < -8) {
			playerTransform.position = spownPosition.position;
			hitPoint--;
			hitpointText.text = "Hitpoint: " + hitPoint.ToString();
			if(hitPoint < 0){
				Application.LoadLevel("Menu"); 
			}
		}
		
	}
	
	public void Win(){
		if(scoree > PlayerPrefs.GetInt("PlayerScore", scoree))
				PlayerPrefs.SetInt ("PlayerScore", scoree);
		else PlayerPrefs.SetInt ("PlayerScore", scoree);
		PlayerPrefs.Save();

		Application.LoadLevel ("Menu");
	}

	public void CollectCoin(){
		scoree++;
		scoreText.text = "Curent Score: " + scoree.ToString();
	}
}

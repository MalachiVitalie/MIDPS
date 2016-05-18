using UnityEngine;
using System.Collections;

public class Ball2 : MonoBehaviour {
    public float force;
    public Transform ballChecker;
	// Use this for initialization
	void Start () {
        // GetComponent<Rigidbody2D>().AddForce(new Vector2(1f, 0.5f) * Time.deltaTime * force);
        transform.position = new Vector2(0, -3.5f);
	}
	
	// Update is called once per frame
	void Update () {
        if (Input.GetKey(KeyCode.Space)) {
            GetComponent<Rigidbody2D>().AddForce(new Vector2(1f, 0.5f) * Time.deltaTime * force);
        }


        if (transform.position.y < ballChecker.transform.position.y) {

            Application.LoadLevel(Application.loadedLevel);
        }

	
	}
}

using UnityEngine;
using System.Collections;

public class CameraScript : MonoBehaviour {
	public Transform lookAt;
	private Vector3 offset = new Vector3(0,0,-14f);
 	private void Start () {
	}
	
	// Update is called once per frame
	private void LateUpdate () {
		transform.position = lookAt.transform.position + offset;
	}
}

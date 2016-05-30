using UnityEngine;
using System.Collections;

public class Player : MonoBehaviour {
	private float inputDirection;		//X 
	private float verticalVelocity; 	//Y

	private float speed = 10.0f;
	private float gravity = 30.0f;		
	private float jumpForce = 15.0f;
	private bool secondJumpAvail = false;

	private Vector3 moveVector;
	private Vector3 lastMotion;
	private CharacterController controller;
	private bool toJump;
	private float dir =0;

	void Start () {
		controller = GetComponent<CharacterController>();
	}

	public void ToJump(){
		toJump = true;
	}
	
	public void MoveLeft(){
		dir = -1;
	}
	
	public void MoveRight(){
		dir = 1;
	}
	
	public void Stop(){
		dir = 0;
	}
	public void StopJump(){
		toJump = false;
	}

	void Update () {

		moveVector = Vector3.zero;
		inputDirection = dir * speed;
		if (Input.GetKeyDown (KeyCode.A))
			dir = -1;
		else if (Input.GetKeyDown (KeyCode.D))
			dir = 1;
		else if (Input.GetKeyUp (KeyCode.D) || Input.GetKeyUp (KeyCode.A))
			dir = 0;

		if (IsControllerGrounded()) {
			verticalVelocity = 0;
			if(Input.GetKeyDown(KeyCode.Space) || toJump){
				verticalVelocity = jumpForce;
				secondJumpAvail = true;
			}
			moveVector.x = inputDirection;
		} else {
			verticalVelocity -= gravity * Time.deltaTime;
			if(Input.GetKeyDown(KeyCode.Space) || toJump){
				if(secondJumpAvail == true){
					verticalVelocity = jumpForce;
					secondJumpAvail = false;
				}
			}
			verticalVelocity -=gravity*Time.deltaTime;
			moveVector.x = lastMotion.x;
		}

		moveVector.y = verticalVelocity;
		controller.Move (moveVector * Time.deltaTime);
		lastMotion = moveVector;
	}

	private bool IsControllerGrounded(){
		Vector3 leftRayStart = controller.bounds.center;
		Vector3 rightRayStart = controller.bounds.center;

		leftRayStart.x -= controller.bounds.extents.x;
		rightRayStart.x +=  controller.bounds.extents.x;
		
		if (Physics.Raycast (leftRayStart, Vector3.down, (controller.height / 2) + 0.1f))
			return true;
		if (Physics.Raycast (rightRayStart, Vector3.down, (controller.height / 2) + 0.1f))
			return true;

		return false;
	}

	private void OnControllerColliderHit(ControllerColliderHit hit){
		if (controller.collisionFlags == CollisionFlags.Sides) {
			if(Input.GetKeyDown(KeyCode.Space) || toJump){
				moveVector = hit.normal*speed;
				moveVector.y = jumpForce;
				secondJumpAvail = true;
			}
		}

		switch(hit.gameObject.tag){
		case "Coin":
			LevelManager.Instance.CollectCoin();
			Destroy(hit.gameObject);
			break;
		case "JumpPad":
			verticalVelocity = jumpForce*2;
			break;
		case "Teleport":
			transform.position = hit.transform.GetChild(0).position;
			break;
		case "WinBox":
			LevelManager.Instance.Win();
			break;
		}

	}




}

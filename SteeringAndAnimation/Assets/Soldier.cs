using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnitySteer.Behaviors;

//[RequireComponent(typeof(SteerForPoint))]
public class Soldier : MonoBehaviour
{

    public SteerForPoint cSteering;
    public Animator animator;

    // Use this for initialization
    void Start()
    {
        cSteering = GetComponent<SteerForPoint>();
        animator = GetComponent<Animator>();

        cSteering.enabled = true;
        animator.SetFloat("speed", 5.0f);

    }


    // Update is called once per frame
    void Update()
    {
        Vector3 currentPos;
        Vector3 robotTargetPos = new Vector3();

        currentPos = transform.position;
        robotTargetPos = cSteering.TargetPoint;
        if (Vector3.Distance(currentPos, robotTargetPos) < 1.0)
        {
            Debug.Log("STOP");
            cSteering.enabled = false;
            animator.SetFloat("speed", -1.0f);
        }



    }
    //{
    //    ////ray starts at player position and points down
    //    //Ray ray = new Ray(transform.position, Vector3.down);

    //    ////will store info of successful ray cast
    //    //RaycastHit hitInfo;

    //    ////terrain should have mesh collider and be on custom terrain 
    //    ////layer so we don't hit other objects with our raycast
    //    //LayerMask layer = 1 << LayerMask.NameToLayer("Terrain");

    //    ////cast ray
    //    //if (Physics.Raycast(ray, out hitInfo, layer))
    //    //{
    //    //    //get where on the z axis our raycast hit the ground
    //    //    float z = hitInfo.point.z;

    //    //    //copy current position into temporary container
    //    //    Vector3 pos = transform.position;

    //    //    //change z to where on the z axis our raycast hit the ground
    //    //    pos.z = z;

    //    //    //override our position with the new adjusted position.
    //    //    transform.position = pos;
    //    //}
    //}



}


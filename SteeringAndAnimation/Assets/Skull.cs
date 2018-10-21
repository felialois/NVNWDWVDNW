using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnitySteer.Behaviors;

[RequireComponent(typeof(SteerForPursuit))]
public class Skull : MonoBehaviour
{

    public SteerForPursuit cSteering;
    public Animator animator;

    // Use this for initialization
    void Start()
    {
        cSteering = GetComponent<SteerForPursuit>();
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
        robotTargetPos = cSteering.Quarry.Position.normalized;
        if (Vector3.Distance(currentPos, robotTargetPos) < 2.0)
        {
            Debug.Log("STOP");
            cSteering.enabled = false;
            animator.SetFloat("speed", -1.0f);
        }



    }


}


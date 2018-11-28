using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RemoveWalls : MonoBehaviour {
    public float lookRadius;
    Transform target;
    private Vector3 wallDir;
    GameObject wall;
    GameObject prev;
    private Vector3 start;
    private Vector3 end;
    private float AngleThreshold;
    private float Move_distance = 5f;
    private float lerptime = 2;
    private float currentLerptime = 0;
    float distance_player_wall;
    bool isCoroutineStarted = false;
    RaycastHit hit;
    FIndClosestWall find = new FIndClosestWall();
    // Use this for initialization
    bool foundwall = false;
    private GameObject EndGate;
    void Start()
    { 
        var find = new FIndClosestWall();
        target = PlayerManager.instance.player.transform;
        EndGate = GameObject.Find("End");
      
    }

    // Update is called once per frame
    void Update()
    {
       float distance_endgate = Vector3.Distance(target.position, transform.position);
       if(Physics.Raycast(target.position, (EndGate.transform.position-target.position).normalized, out hit)){
            Debug.Log(hit.collider.name);
       }
       // Debug.Log(h.collider.name);

        if (distance_endgate > lookRadius)
        {
            if (!foundwall)
            {
                wall = find.FIndWall("RemovableWalls");
                if (wall == prev)
                {
                    wall = find.FIndWall("RemovableWalls");
                }
                else  {
                start = wall.transform.position;
                end = wall.transform.position + Vector3.up * Move_distance;
                //    distance_player_wall = Vector3.Distance(target.position, wall.transform.position);
                foundwall = true;
                prev = wall;
                currentLerptime = 0;
            } }
    
            
            distance_player_wall = Vector3.Distance(target.position, wall.transform.position);
            wallDir = (wall.transform.position - target.position);
            float angle = Vector3.Dot(target.forward, wallDir);
            if (angle > 0.9)
            {
                if (distance_player_wall < 10)

                {
                    currentLerptime += Time.deltaTime; ;
                    if (currentLerptime >= lerptime)
                    {
                        currentLerptime = lerptime;
                    }
                    float perc = currentLerptime / lerptime;
                    wall.transform.position = Vector3.Lerp(start, end, perc);


                    //  if (!isCoroutineStarted)
                    //  {
                    //      StartCoroutine(DissolveAnim(start, end, wall,0,5));
                    //   }
                    //  

                }
                // foundwall = false;
                foundwall = false;
            }
            // if (wall.transform.position == end) {
            }

        }

    }



using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AddWalls : MonoBehaviour
{
    public float lookRadius;
    Transform target;
    private Vector3 wallDir;
    GameObject wall;
    GameObject prev;
    private Vector3 start;
    private Vector3 end;
    private float AngleThreshold;
    private float Move_distance = 5f;
    private float lerptime = 1;
    private float currentLerptime = 0;
    float distance_player_wall;
    bool isCoroutineStarted = false;
    FIndClosestWall find = new FIndClosestWall();
    // Use this for initialization
    bool foundwall = false;
    void Start()
    {
        var find = new FIndClosestWall();
        target = PlayerManager.instance.player.transform;

    }

    // Update is called once per frame
    void Update()
    {
        float distance_endgate = Vector3.Distance(target.position, transform.position);


        if (distance_endgate < lookRadius)
        {
            if (!foundwall)
            {
                wall = find.FIndWall("AddableWalls");
                if (wall == prev)
                {
                    wall = find.FIndWall("AddableWalls");
                }
                else
                {
                    start = wall.transform.position;
                    end = wall.transform.position + Vector3.up * Move_distance;
                    foundwall = true;
                    prev = wall;
                    currentLerptime = 0;
                }
            }


            distance_player_wall = Vector3.Distance(target.position, wall.transform.position);
      
            // make sure player is facing wall

            wallDir = (wall.transform.position - target.position);
            float angle = Vector3.Dot(target.forward, wallDir);
            if (angle > 0.9)
            {
                // remove wall when player is in proximity
                if (distance_player_wall < 10)

                {
                    currentLerptime += Time.deltaTime; 

                    // linear interpolation 

                    if (currentLerptime >= lerptime)
                    {
                        currentLerptime = lerptime;
                    }
                    float perc = currentLerptime / lerptime;
                    wall.transform.position = Vector3.Lerp(start, end, perc);
                }
     
                foundwall = false;
            }

        }

    }

}



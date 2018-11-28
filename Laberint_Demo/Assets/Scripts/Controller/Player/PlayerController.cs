using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour {

    // Use this for initialization
   public GameObject[] points;
    GameObject smellPoints;
    GameObject prev;
    float Distance;
    bool isfirstCoroutineStarted = false;
    bool isSecondCoroutineStarted = false;
    FindSmellPoints findSmell = new FindSmellPoints();
    void Start()
    {
        points = GameObject.FindGameObjectsWithTag("PlayerSmell");
        foreach (GameObject go in points)
        {
            go.SetActive(false);
        }

    }
	// Update is called once per frame
	void Update () {
        smellPoints = findSmell.FindSmell(points);
        if (smellPoints == prev)
        {
            smellPoints = findSmell.FindSmell(points);
        }
        prev = smellPoints;
        
        Distance = Vector3.Distance(smellPoints.transform.position, transform.position);
        if (Distance < 2)
        {
            if (!isfirstCoroutineStarted)
            {
                StartCoroutine(ActiveSmell1(smellPoints));
            }

            else //if (!isSecondCoroutineStarted)
            {
                StartCoroutine(ActiveSmell2(smellPoints));
            }
        }
    }
    IEnumerator ActiveSmell1(GameObject smellPoints)
    {
        isfirstCoroutineStarted = true;
       
        smellPoints.SetActive(true);
        yield return new WaitForSeconds(7);
        smellPoints.SetActive(false);
        isfirstCoroutineStarted = false;
        }

    IEnumerator ActiveSmell2(GameObject smellPoints)
    {

        isSecondCoroutineStarted = true;
       
        smellPoints.SetActive(true);
        yield return new WaitForSeconds(7);
        smellPoints.SetActive(false);
        isSecondCoroutineStarted = false;
    }
}


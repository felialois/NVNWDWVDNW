using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VisibilityCOntroller : MonoBehaviour {

    public float lookRadius;
    public Material[] material;
    Renderer rend;
    // Collider collision;
    Transform target;
    bool isCoroutineStarted;
    // Use this for initialization
    void Start()
    {
        target = PlayerManager.instance.player.transform;
        rend = GetComponent<Renderer>();
        rend.enabled = false;
       // collision.enabled = false;
        //rend.sharedMaterial = material[0];
    }

    // Update is called once per frame
    void Update()
    {
        float distance = Vector3.Distance(target.position, transform.position);
        if (distance <=  lookRadius)
        {
            rend.enabled = true;
            rend.sharedMaterial = material[0];
            if (!isCoroutineStarted)
            {
                StartCoroutine(DissolveAnim(material[0]));
            }
                  if (distance < 7)
                  {
                     rend.sharedMaterial = material[1];
                  }

            } 
        else rend.enabled = false;
        //  else rend.sharedMaterial = material[0];




    }
    IEnumerator DissolveAnim(Material material)
    {
        isCoroutineStarted = true;
        rend.sharedMaterial = material;
        material.SetFloat("Vector1_F0BB2578", 1.0f);
        for (float t = 1; t >= 0; t -= Time.deltaTime)
        {
            yield return null;
            yield return null;// wait 1 frame
                              // here is where the weird generated property name goes
            material.SetFloat("Vector1_F0BB2578", t);
        }
        material.SetFloat("Vector1_F0BB2578", 0.0f);

    }
}
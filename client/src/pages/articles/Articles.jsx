import React from 'react'
import "./Articles.css"
import { Link } from 'react-router-dom'
import { FcSearch } from 'react-icons/fc'
const Articles = () => {
  return (
    <div className="articles">
      <p className="heading">Articles</p>
      <input type="text" placeholder="Enter topic name"/>
      <button><FcSearch /></button>
      <section>
        <p>Understanding and Treating Anxiety Disorders</p>
        <Link to="https://www.psychologytoday.com/us/basics/anxiety">Disease link</Link>
      </section>
      <section>
        <p>Depression: Signs, Symptoms, and Treatment</p>
        <Link to="https://www.nimh.nih.gov/health/topics/depression/index.shtml">Disease link</Link>
      </section>
      <section>
        <p>Schizophrenia: Overview and Latest Research</p>
        <Link to="https://www.nimh.nih.gov/health/topics/schizophrenia/index.shtml">Disease link</Link>
      </section>
      <section>
        <p>Eating Disorders: Types, Symptoms, and Treatment</p>
        <Link to="https://www.nationaleatingdisorders.org/learn/general-information">Disease link</Link>
      </section>
      <section>
        <p>Personality Disorders: An Overview</p>
        <Link to="https://www.psychiatry.org/patients-families/personality-disorders/what-are-personality-disorders">Disease link</Link>
      </section>
      <section>
        <p>Autism Spectrum Disorder: Information and Resources</p>
        <Link to="https://www.autismspeaks.org/what-autism">Disease link</Link>
      </section>
      <section>
        <p>Dissociative Disorders: Overview and Treatment</p>
        <Link to="https://www.psychologytoday.com/us/conditions/dissociative-disorders">Disease link</Link>
      </section>
      <section>
        <p>Somatic Symptom and Related Disorders</p>
        <Link to="https://www.ncbi.nlm.nih.gov/books/NBK532920/">Disease link</Link>
      </section>
      <section>
        <p>Overview of Common Sleep Disorders</p>
        <Link to="https://www.sleepfoundation.org/sleep-disorders">Disease link</Link>
      </section>
      <section>
        <p>Substance Use Disorders: A Comprehensive Guide</p>
        <Link to="https://www.drugabuse.gov/publications/drugfacts/substance-use-in-women">Disease link</Link>
      </section>
      <section>
        <p>Alzheimer's Disease: Information and Support</p>
        <Link to="https://www.alz.org/">Disease link</Link>
      </section>
      <section>
        <p>Obsessive-Compulsive Disorder (OCD): Overview and Help</p>
        <Link to="https://iocdf.org/about-ocd/">Disease link</Link>
      </section>
      <section>
        <p>National Eating Disorders Association (NEDA): Resources</p>
        <Link to="https://www.nationaleatingdisorders.org/">Disease link</Link>
      </section>
      <section>
        <p>Understanding Gender Dysphoria and Gender Identity</p>
        <Link to="https://www.psychiatry.org/patients-families/gender-dysphoria/what-is-gender-dysphoria">Disease link</Link>
      </section>
      <section>
        <p>Paraphilic Disorders: Diagnosis and Treatment</p>
        <Link to="https://www.ncbi.nlm.nih.gov/books/NBK549876/">Disease link</Link>
      </section>
      {/* <Link to="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3876031/">Play</Link> */}
    </div>
  )
}

export default Articles
# Requires: pip install spacy
# and spaCy model: python -m spacy download en_core_web_sm

import re
import spacy

nlp = spacy.load("en_core_web_sm")

def extract_email(text):
    m = re.search(r"[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+", text)
    return m.group(0) if m else ""

def extract_phone(text):
    m = re.search(r"(\+?\d[\d\-\s]{7,}\d)", text)
    return m.group(0).strip() if m else ""

def extract_name(doc):
    # crude heuristic: first PERSON entity
    for ent in doc.ents:
        if ent.label_ == "PERSON":
            return ent.text
    return ""

def extract_skills(text, skills_list=None):
    if skills_list is None:
        skills_list = ["python","java","sql","nlp","machine learning","rpa","aws","docker"]
    text_lower = text.lower()
    return [s for s in skills_list if s in text_lower]

# Example usage
resume_text = """
John Doe
Email: john.doe@example.com
Phone: +91 98765 43210

Experienced ML engineer skilled in Python, NLP, Docker and AWS.
"""

doc = nlp(resume_text)
print("Name :", extract_name(doc))
print("Email:", extract_email(resume_text))
print("Phone:", extract_phone(resume_text))
print("Skills:", extract_skills(resume_text))

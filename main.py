import openai

def respond_to_email(content, alignment_file):
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "Use the alignment guidelines for this email."},
            {"role": "user", "content": content},
        ]
    )
    return response["choices"][0]["message"]["content"]

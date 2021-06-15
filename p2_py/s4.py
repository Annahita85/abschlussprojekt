from selenium import webdriver
import pandas as pd
from bs4 import BeautifulSoup
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import time
from selenium.webdriver import ActionChains
from selenium.webdriver.support.ui import WebDriverWait

driver = webdriver.Chrome("C:/Program Files (x86)/chromedriver.exe")

df = pd.read_excel("D:/refugeeks_project/Klinikliste.xlsx", sheet_name="Tabelle1")

kliniks = df["Link Klinikbewertungen"]

klinikliste = kliniks.tolist()

names=[]
ratings=[]
reviews=[]
departments=[]
dates=[]
titles=[]


x=0
for x in klinikliste:
    url = x
    driver.get(url)
    content = driver.page_source
    soup = BeautifulSoup(content, 'html.parser')
    name = driver.find_element_by_tag_name("h1").text
    time.sleep(3)
    try:
        driver.find_element_by_id("ez-accept-all").click()
    except:
        print("Kein cookies")
    time.sleep(3)

    for ele in soup.find_all("article", attrs={"class":"bewertung"}):
        names.append(name)
        title = ele.find("h2")
        titles.append(title.text)
        date = ele.find("time")
        dates.append(date.text)
        department = ele.find("a", href=True)
        departments.append(department.text)
        review = ele.find("p").text.split("\n")
        reviews.append(review)
        rating = ele.find("section", attrs={"class":"rating"}).text.split("\n")
        ratings.append(rating)


df = pd.DataFrame({'Klinik_Name':names, 'Title':titles, 'Department':departments, 'Date':dates, 'Review':reviews, 'Rating':ratings}) 
df.to_csv('D:/refugeeks_project/selenium_py/p2_py/kliniks_Gesamt_liste.csv', index=False, encoding='utf-8')


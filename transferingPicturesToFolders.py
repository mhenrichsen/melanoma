import os, glob
from os import walk, getcwd
import re
import pprint
import shutil
import csv

# Sti til billeder og CSV filer
billederSti = "/Users/madsgadehenrichsen/Desktop/Bachelorprojekt/Data/Mapper med billeder/ISIC-2017_Training_Data/"
csvSti = "/Users/madsgadehenrichsen/Desktop/Bachelorprojekt/Data/CSV filer/ISIC-2017_Training_Part3_GroundTruth.csv"



# Finder alle filer i en mappe
for picNavn in glob.glob(os.path.join(billederSti, '*.jpg')):

    #Vælger karakterne i det nedenstående interval
    isoleretNavn =  picNavn[99:111]

    # Læser hver linje i CSV filen
    with open(csvSti, 'rb') as csvfile:
        reader = csv.reader(csvfile, delimiter=' ', quotechar='|')
        for row in reader:
            text = ', '.join(row)

            # Opdeler hver linje i flere variabler
            filnavn, melanoma, vorte = text.split(',')

            #Flytter billederne ind til forskellige mapper alt efter type
            if filnavn == isoleretNavn:
                print filnavn + " " + isoleretNavn
                if melanoma == '1.0':
                    print 'melanoma'
                    os.rename(billederSti + isoleretNavn + '.jpg', "/Users/madsgadehenrichsen/Desktop/Bachelorprojekt/Data/Mapper med billeder/Training data/Melanoma/"+ isoleretNavn + ".jpg")
                elif vorte == '1.0':
                    print 'vorte'
                    os.rename(billederSti + isoleretNavn + '.jpg', "/Users/madsgadehenrichsen/Desktop/Bachelorprojekt/Data/Mapper med billeder/Training data/Vorter/" + isoleretNavn + ".jpg")
                else:
                    print 'intet'
                    os.rename(billederSti + isoleretNavn + '.jpg', "/Users/madsgadehenrichsen/Desktop/Bachelorprojekt/Data/Mapper med billeder/Training data/Modermaerker/" + isoleretNavn + ".jpg")

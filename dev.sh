if [ -d "${HOME}/.nvm/" ]
then
  . ${HOME}/.nvm/nvm.sh
fi

checkYarn(){
  ss=`yarn -v`
  flag=$?
  if [ $flag != 0 ]
  then
    echo -e "\033[41;37m Please Install Yarn \033[0m"
    return 0
  else
    return 1
  fi
}


checkNode(){
  for line in `node -v` 
  do
  if [ $line != "v14.11.0" ]
  then
    nvm use v14.11.0
    ret=$?
    if [ $ret != 0 ]
    then
      echo -e "\033[41;37m Change Node to v14.11.0 (try nvm use v14.11.0)\033[0m"
    return 0
    else
      return 1
    fi
  else
    return 1
  fi
  done
}


dev(){
  echo 'start building'
  yarn
  yarn start
}


checkYarn
ret=$?
if [ $ret = 1 ]
then
  checkNode 
  ret=$?
  if [ $ret = 1 ]
  then
    dev
  fi
fi





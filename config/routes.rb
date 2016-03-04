Rails.application.routes.draw do

  # root 'welcome#index'
  get '/', to: 'lessons#index'

  get '/lessons', to: 'lessons#index'





  get '/lessons/stringConcat', to: 'lessons#stringConcat'

  get '/lessons/arrayPop', to: 'lessons#arrayPop'

  get '/lessons/forLoopPush', to: 'lessons#forLoopPush'

  get '/lessons/numberMathRound', to: 'lessons#numberMathRound'


  get '/lessons/objectAccess', to: 'lessons#objectAccess'

end
